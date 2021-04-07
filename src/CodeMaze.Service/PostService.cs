using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using CodeMaze.Data.Entities;
using CodeMaze.Data.RequestResponse;
using CodeMaze.Data.Systems;
using CodeMaze.Data.ViewModels;
using CodeMaze.Extension;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace CodeMaze.Service
{
    public class PostService : KyzinService
    {
        #region Repository Objects

        private readonly IRepository<PostEntity> _postRepository;
        private readonly IRepository<PostExtensionEntity> _postExtensionRepository;
        private readonly IRepository<TagEntity> _tagRepository;
        private readonly IRepository<PostTagEntity> _postTagRepository;
        private readonly IRepository<CategoryEntity> _categoryRepository;
        private readonly IRepository<PostCategoryEntity> _postCategoryRepository;

        #endregion Repository Objects

        public PostService(ILogger<PostService> logger,
            IOptions<AppSettings> settings,
            IMapper mapper,
            IRepository<PostEntity> postRepository,
            IRepository<PostExtensionEntity> postExtensionRepository,
            IRepository<TagEntity> tagRepository,
            IRepository<PostTagEntity> postTagRepository,
            IRepository<CategoryEntity> categoryRepository,
            IRepository<PostCategoryEntity> postCategoryRepository) : base(logger, mapper, settings)
        {
            _postRepository = postRepository;
            _postExtensionRepository = postExtensionRepository;
            _tagRepository = tagRepository;
            _postTagRepository = postTagRepository;
            _categoryRepository = categoryRepository;
            _postCategoryRepository = postCategoryRepository;
        }

        public int CountVisiblePosts(string categoryUrl = "", string categoryCode = "")
        {
            if (string.IsNullOrEmpty(categoryUrl) && string.IsNullOrEmpty(categoryCode))
                return _postRepository.Count(new PostSpecial());
            else
                return _postCategoryRepository.Count(new PostCategorySpecial(categoryUrl, categoryCode));
        }

        public int CountVisiblePostsByTagName(string tagName)
        {
            if (string.IsNullOrEmpty(tagName))
                return 0;

            return _postTagRepository.Count(new PostTagSpecial(tagName));
        }

        public int CountManagePosts()
        {
            return _postRepository.Count(new PostSpecial());
        }

        public Task<int> CountByUserId(int userId)
        {
            return _postRepository.CountAsync(new PostSpecial(userId));
        }

        public Response<int> CountByCategoryId(Guid catId)
        {
            return TryExecute(() =>
            {
                var count = _postCategoryRepository.Count(c => c.CategoryId == catId);
                return new SuccessResponse<int>(count);
            });
        }

        //public Task<Response<IReadOnlyList<ArchiveItem>>> GetArchiveListAsync()
        //{
        //    return TryExecuteAsync<IReadOnlyList<ArchiveItem>>(async () =>
        //    {
        //        if (!_postRepository.Any(p =>
        //            p.PostPublish.IsPublished && !p.PostPublish.IsDeleted))
        //            return new SuccessResponse<IReadOnlyList<ArchiveItem>>();

        //        var list = await _postRepository.SelectGroupAsync(post => new
        //        {
        //            year = post.PostPublish.PubDateUtc.Value.Year,
        //            month = post.PostPublish.PubDateUtc.Value.Month
        //        }, monthList => new ArchiveItem
        //        {
        //            Year = monthList.Key.year,
        //            Month = monthList.Key.month,
        //            Count = monthList.Select(p => p.Id).Count()
        //        });

        //        return new SuccessResponse<IReadOnlyList<ArchiveItem>>(list);
        //    });
        //}

        public Task<Response> UpdatePostStatisticAsync(Guid postId, StatisticTypes statisticTypes)
        {
            return TryExecuteAsync<Response>(async () =>
            {
                var pp = _postExtensionRepository.Get(postId);
                if (pp == null) return new FailedResponse((int)ResponseFailureCode.PostNotFound);

                if (statisticTypes == StatisticTypes.Hits)
                {
                    pp.Hits += 1;
                }
                if (statisticTypes == StatisticTypes.Likes)
                {
                    pp.Likes += 1;
                }
                if (statisticTypes == StatisticTypes.Views)
                {
                    pp.Views += 1;
                }

                await _postExtensionRepository.UpdateAsync(pp);
                return new SuccessResponse();
            }, keyParameter: postId);
        }

        //public Response<PostEntity> GetPost(Guid id)
        //{
        //    return TryExecute(() =>
        //    {
        //        var post = _postRepository.GetFirstOrDefault(p => p.Id.Equals(id));
        //        return new SuccessResponse<PostEntity>(post);
        //    });
        //}

        public Task<Response<PostEditViewModel>> GetPostUpdateAsync(Guid id)
        {
            return TryExecuteAsync<PostEditViewModel>(async () =>
            {
                var result = await _postRepository.GetAsQueryable()
                            .Include(post => post.PostCategory)
                            .Include(post => post.PostTag).ThenInclude(pTag => pTag.Tag)
                            .FirstOrDefaultAsync(post => post.Id.Equals(id));

                var post = _mapper.Map<PostEditViewModel>(result);

                return new SuccessResponse<PostEditViewModel>(post);
            });
        }

        public Task<Response<PostItem>> GetPostAsync(string url, string code)
        {
            return TryExecuteAsync<PostItem>(async () =>
            {
                var response = await _postRepository.GetAsQueryable()
                                                        .Include(post => post.PostCategory)
                                                            .ThenInclude(postCat => postCat.Category)
                                                        .Include(post => post.PostTag)
                                                            .ThenInclude(postTag => postTag.Tag)
                                                        .Include(post => post.PostExtension)
                                                    .Where(post => post.Url.Equals(url) && post.Code.Equals(code))
                                                    .FirstOrDefaultAsync();
                if (response != null)
                {
                    return new SuccessResponse<PostItem>(_mapper.Map<PostItem>(response));
                }

                return new FailedResponse<PostItem>(404);
            });
        }

        public Task<IReadOnlyList<PostViewModel>> GetPostByUserIdAsync(int userId)
        {
            var spec = new PostSpecial(userId, 0, 20);

            var posts = _postRepository.SelectAsync(spec, post => _mapper.Map<PostViewModel>(post), false);

            return posts;
        }

        public Task<IReadOnlyList<PostMetaData>> GetPostMetaListAsync(bool isDeleted = false, bool isPublished = true)
        {
            return _postRepository.SelectAsync(
                post => post.IsDeleted.Equals(isDeleted) && post.IsPublished.Equals(isPublished),
                post => _mapper.Map<PostMetaData>(post));
        }

        public List<PostListItem> GetPagedPostsAsync(int pageSize, int pageIndex)
        {
            if (pageSize < 1)
            {
                throw new ArgumentOutOfRangeException(nameof(pageSize),
                    $"{nameof(pageSize)} can not be less than 1, current value: {pageSize}.");
            }
            if (pageIndex < 1)
            {
                throw new ArgumentOutOfRangeException(nameof(pageIndex),
                    $"{nameof(pageIndex)} can not be less than 1, current value: {pageIndex}.");
            }

            return _postRepository.GetAsQueryable()
                                .Include(post => post.PostCategory).ThenInclude(category => category.Category)
                                .Include(post => post.PostTag).ThenInclude(tag => tag.Tag)
                                .Include(post => post.PostExtension)
                                .OrderByDescending(orderby => orderby.CreateOnUtc)
                                .Skip((pageIndex - 1) * pageSize)
                                .Take(pageSize)
                                .Select(post => _mapper.Map<PostListItem>(post)).ToList();
        }

        public async Task<IReadOnlyList<PostListItem>> GetArchivedPostsAsync(int year, int month = 0)
        {
            if (year < DateTime.MinValue.Year || year > DateTime.MaxValue.Year)
            {
                throw new ArgumentOutOfRangeException(nameof(year));
            }

            if (month > 12 || month < 0)
            {
                throw new ArgumentOutOfRangeException(nameof(month));
            }

            var list = await _postRepository.SelectAsync(p => new PostListItem
            {
                Title = p.Title,
                Url = p.Url,
                ContentAbstract = p.ContentAbstract,
                PubDateUtc = p.PubDateUtc.GetValueOrDefault()
            });
            return list;
        }

        public Task<Response<IReadOnlyList<PostListItem>>> GetPostsByCategoryAsync(CategoryRequestViewModel category, int pageSize = 20, int pageIndex = 1)
        {
            return TryExecuteAsync<IReadOnlyList<PostListItem>>(async () =>
            {
                if (category is null)
                {
                    throw new ArgumentNullException("Could not found category because url or code null");
                }

                var posts = await _postRepository.GetAsQueryable()
                                                    .Include(post => post.PostCategory).ThenInclude(category => category.Category)
                                                    .Include(post => post.PostTag).ThenInclude(tag => tag.Tag)
                                                    .Include(post => post.PostExtension)
                                                    .Where(p => p.PostCategory.Any(c => c.Category.Url.Equals(category.Url) &&
                                                                                        c.Category.Code.Equals(category.Code)) &&
                                                                                        p.IsPublished && !p.IsDeleted)
                                                    .OrderByDescending(post => post.CreateOnUtc)
                                                    .Skip((pageIndex - 1) * pageSize)
                                                    .Take(pageSize)
                                                    .Select(post => _mapper.Map<PostListItem>(post))
                                                    .ToListAsync();

                return new SuccessResponse<IReadOnlyList<PostListItem>>(posts);
            });
        }

        public Task<Response<List<RelatedPostViewModel>>> GetRelatedPostsAsync(List<CategoryViewModel> categories, int pageSize = 20)
        {
            return TryExecuteAsync<List<RelatedPostViewModel>>(async () =>
            {
                if (categories == null || categories?.Count == 0)
                {
                    throw new ArgumentNullException("Could not found category because url or code null");
                }
                var categoryIdList = categories.Select(category => category.Id);

                var posts = await _postRepository.GetAsQueryable()
                                      .Where(post => post.PostCategory.Any(postCat => categoryIdList.Contains(postCat.Category.Id)))
                                      .OrderByDescending(post => post.CreateOnUtc)
                                      .Skip(0)
                                      .Take(pageSize)
                                      .Select(post => _mapper.Map<RelatedPostViewModel>(post))
                                      .ToListAsync();

                return new SuccessResponse<List<RelatedPostViewModel>>(posts);
            });
        }

        public Task<Response<List<RecentPostViewModel>>> GetRecentPostsAsync(CategoryRequestViewModel category, int top = 5)
        {
            return TryExecuteAsync<List<RecentPostViewModel>>(async () =>
            {
                IQueryable<PostEntity> postQuery;

                if (category is null)
                {
                    postQuery = _postRepository.GetAsQueryable()
                                                .Include(post => post.PostExtension)
                                                .Where(post =>
                                                            post.IsPublished &&
                                                            post.PubDateUtc.HasValue &&
                                                            !post.IsDeleted
                                                        );
                }
                else
                {
                    postQuery = _postRepository.GetAsQueryable()
                                                .Include(post => post.PostExtension).Where(post =>
                                                post.PostCategory.Any(cat =>
                                                                            cat.Category.Url.Equals(category.Url) &&
                                                                            cat.Category.Code.Equals(category.Code)
                                                                      ) &&
                                                post.IsPublished &&
                                                post.PubDateUtc.HasValue &&
                                                !post.IsDeleted);
                }

                var posts = await postQuery.OrderByDescending(p => p.PostExtension.Views)
                                            .Skip(0)
                                            .Take(top)
                                            .Select(post => _mapper.Map<RecentPostViewModel>(post))
                                            .ToListAsync();

                return new SuccessResponse<List<RecentPostViewModel>>(posts);
            });
        }

        public Task<Response<IReadOnlyList<PostListItem>>> GetByTagNameAsync(string tagName, int pageSize = 20, int pageIndex = 1)
        {
            return TryExecuteAsync<IReadOnlyList<PostListItem>>(async () =>
            {
                if (string.IsNullOrEmpty(tagName))
                    throw new NullReferenceException("Tag name is required");

                var special = new PostSpecial(tagName, (pageIndex - 1) * pageSize, pageSize);
                var posts = await _postRepository.SelectAsync(special, post => _mapper.Map<PostListItem>(post));

                return new SuccessResponse<IReadOnlyList<PostListItem>>(posts);
            });
        }

        #region Search

        public Task<Response<IReadOnlyList<PostListItem>>> SearchPostAsync(string keyword)
        {
            return TryExecuteAsync<IReadOnlyList<PostListItem>>(async () =>
            {
                if (string.IsNullOrWhiteSpace(keyword))
                {
                    throw new ArgumentNullException(keyword);
                }

                var postList = SearchPostByKeyword(keyword);

                var resultList = await postList.Select(p => new PostListItem
                {
                    Title = p.Title,
                    Url = p.Url,
                    ContentAbstract = p.ContentAbstract,
                    PubDateUtc = p.PubDateUtc.GetValueOrDefault(),
                    Tags = p.PostTag.Select(pt => new TagViewModel
                    {
                        NormalizedTagName = pt.Tag.NormalizedName,
                        TagName = pt.Tag.DisplayName
                    }).ToList()
                }).ToListAsync();

                return new SuccessResponse<IReadOnlyList<PostListItem>>(resultList);
            }, keyParameter: keyword);
        }

        private IQueryable<PostEntity> SearchPostByKeyword(string keyword)
        {
            var query = _postRepository.GetAsQueryable()
                                       .Include(p => p.PostTag)
                                       .ThenInclude(pt => pt.Tag)
                                       .Where(p => !p.IsDeleted && p.IsPublished).AsNoTracking();

            var str = Regex.Replace(keyword, @"\s+", " ");
            var rst = str.Split(' ');
            if (rst.Length > 1)
            {
                // keyword: "dot  net rocks"
                // search for post where Title containing "dot && net && rocks"
                var result = rst.Aggregate(query, (current, s) => current.Where(p => p.Title.Contains(s)));
                return result;
            }
            else
            {
                // keyword: "dotnetrocks"
                var k = rst.First();
                var result = query.Where(p => p.Title.Contains(k) ||
                                              p.PostTag.Select(pt => pt.Tag).Select(t => t.DisplayName).Contains(k));
                return result;
            }
        }

        #endregion Search

        //public string GetPostTitle(Guid postId)
        //{
        //    if (postId == Guid.Empty)
        //    {
        //        return string.Empty;
        //    }

        //    return _postRepository.SelectFirstOrDefault(p => p.Id == postId, p => p.Title);
        //}

        public Response<PostEntity> Add(CreatePostRequest request)
        {
            return TryExecute(() =>
            {
                var dateUtc = DateTime.UtcNow;
                var postModel = new PostEntity
                {
                    CommentEnabled = request.EnableComment,
                    Id = Guid.NewGuid(),
                    PostContent = request.HtmlContent,
                    ContentAbstract = request.ShortContent,
                    CreateOnUtc = dateUtc,
                    LastModifiedUtc = dateUtc,
                    Code = request.Title.ConvertToCode(),
                    Url = request.Title.ConvertToUrl(),
                    Title = request.Title.Trim(),
                    IsDeleted = false,
                    IsPublished = request.IsPublished,
                    PubDateUtc = request.IsPublished ? dateUtc : (DateTime?)null,
                    ExposedToSiteMap = request.ExposedToSiteMap,
                    IsFeedIncluded = request.IsFeedIncluded,
                    PostExtension = new PostExtensionEntity
                    {
                        Hits = 0,
                        Likes = 0
                    }
                };

                // add categories
                if (null != request.CategoryIds && request.CategoryIds.Length > 0)
                {
                    foreach (var cid in request.CategoryIds)
                    {
                        if (_categoryRepository.Any(c => c.Id == cid))
                        {
                            postModel.PostCategory.Add(new PostCategoryEntity
                            {
                                CategoryId = cid,
                                PostId = postModel.Id
                            });
                        }
                    }
                }

                // add tags
                if (null != request.Tags && request.Tags.Length > 0)
                {
                    foreach (string item in request.Tags)
                    {
                        var tag = _tagRepository.Get(q => q.DisplayName.Equals(item));
                        if (null == tag)
                        {
                            var newTag = new TagEntity
                            {
                                DisplayName = item,
                                NormalizedName = item.ConvertToUrl()
                            };

                            tag = _tagRepository.Add(newTag);
                        }

                        postModel.PostTag.Add(new PostTagEntity
                        {
                            TagId = tag.Id,
                            PostId = postModel.Id
                        });
                    }
                }

                _postRepository.Add(postModel);
                Logger.LogInformation($"New Post Created Successfully. PostId: {postModel.Id}");
                return new SuccessResponse<PostEntity>(postModel);
            });
        }

        public Response<PostEntity> Update(UpdatePostRequest request)
        {
            return TryExecute<PostEntity>(() =>
            {
                var postModel = _postRepository.GetAsQueryable()
                                    .Include(post => post.PostExtension)
                                    .Include(post => post.PostCategory)
                                    .Include(post => post.PostTag).ThenInclude(pTag => pTag.Tag)
                                    .FirstOrDefault(post => post.Id.Equals(request.Id));

                if (null == postModel)
                {
                    return new FailedResponse<PostEntity>((int)ResponseFailureCode.PostNotFound);
                }

                postModel.CommentEnabled = request.EnableComment;
                postModel.PostContent = request.HtmlContent;
                postModel.ContentAbstract = request.ShortContent;
                postModel.IsPublished = request.IsPublished;
                postModel.Code = request.Code;
                postModel.Url = request.Url;
                postModel.Title = request.Title;
                postModel.ExposedToSiteMap = request.ExposedToSiteMap;
                postModel.LastModifiedUtc = DateTime.UtcNow;
                postModel.IsFeedIncluded = request.IsFeedIncluded;

                // from draft
                if (!postModel.PubDateUtc.HasValue)
                {
                    postModel.PubDateUtc = DateTime.UtcNow;
                }

                // 1. Add new tags to tag lib
                foreach (var item in request.Tags.Where(item => !_tagRepository.Any(p => p.DisplayName == item)))
                {
                    _tagRepository.Add(new TagEntity
                    {
                        DisplayName = item,
                        NormalizedName = item.ConvertToUrl()
                    });
                }

                // 2. update tags
                postModel.PostTag.Clear();
                if (request.Tags.Any())
                {
                    foreach (var t in request.Tags)
                    {
                        var tag = _tagRepository.Get(_ => _.DisplayName == t);
                        if (tag != null) postModel.PostTag.Add(new PostTagEntity
                        {
                            PostId = postModel.Id,
                            TagId = tag.Id
                        });
                    }
                }

                // 3. update categories
                postModel.PostCategory.Clear();
                if (null != request.CategoryIds && request.CategoryIds.Length > 0)
                {
                    foreach (var cid in request.CategoryIds)
                    {
                        if (_categoryRepository.Any(c => c.Id == cid))
                        {
                            postModel.PostCategory.Add(new PostCategoryEntity
                            {
                                PostId = postModel.Id,
                                CategoryId = cid
                            });
                        }
                    }
                }

                _postRepository.Update(postModel);
                return new SuccessResponse<PostEntity>(postModel);
            });
        }

        //public Response RestoreDeletedPost(Guid postId)
        //{
        //    return TryExecute(() =>
        //    {
        //        var pp = _postPublishRepository.Get(postId);
        //        if (null == pp) return new FailedResponse((int)ResponseFailureCode.PostNotFound);

        //        pp.IsDeleted = false;
        //        var rows = _postPublishRepository.Update(pp);
        //        return new Response(rows > 0);
        //    }, keyParameter: postId);
        //}

        public Response Delete(Guid postId, bool isRecycle = false)
        {
            return TryExecute(() =>
            {
                var post = _postRepository.Get(postId);
                if (null == post) return new FailedResponse((int)ResponseFailureCode.PostNotFound);

                int rows;
                if (isRecycle)
                {
                    post.IsDeleted = true;
                    rows = _postRepository.Update(post);
                }
                else
                {
                    rows = _postRepository.Delete(post);
                }

                return new Response(rows > 0);
            }, keyParameter: postId);
        }

        public Task<Response> DeleteRecycledPostsAsync()
        {
            return TryExecuteAsync<Response>(async () =>
            {
                var posts = await _postRepository.GetAsync(p => p.IsDeleted == true);
                await _postRepository.DeleteAsync(posts);

                return new SuccessResponse();
            });
        }

        public Task<Response<IReadOnlyList<PostManageViewModel>>> GetAllPostAsync(int pageIndex, int pageSize)
        {
            return TryExecuteAsync<IReadOnlyList<PostManageViewModel>>(async () =>
            {
                var posts = await _postRepository.GetAsQueryable().OrderByDescending(post => post.CreateOnUtc)
                                                 .Skip((pageIndex - 1) * pageSize)
                                                 .Take(pageSize)
                                                 .Select(post => _mapper.Map<PostManageViewModel>(post))
                                                 .ToListAsync();

                return new SuccessResponse<IReadOnlyList<PostManageViewModel>>(posts);
            });
        }
    }
}