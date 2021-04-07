using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using CodeMaze.Data.Entities;
using CodeMaze.Data.RequestResponse;
using CodeMaze.Data.ViewModels;
using CodeMaze.Extension;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeMaze.Service
{
    public class TagService : BaseService
    {
        private readonly IRepository<TagEntity> _tagRepository;
        private readonly IRepository<PostTagEntity> _postTagRepository;

        public TagService(
            ILogger<TagService> logger,
            IMapper mapper,
            IRepository<TagEntity> tagRepository,
            IRepository<PostTagEntity> postTagRepository) : base(logger, mapper)
        {
            _tagRepository = tagRepository;
            _postTagRepository = postTagRepository;
        }

        public Task<IReadOnlyList<TagEntity>> GetAllTagsAsync()
        {
            return _tagRepository.GetAsync();
        }

        public async Task<IReadOnlyList<string>> GetAllTagNamesAsync()
        {
            return await _tagRepository.SelectAsync(t => t.DisplayName);
        }

        public TagEntity Add(TagEntity entity)
        {
            var tag = _tagRepository.Add(entity);
            return tag;
        }

        public Response UpdateTag(int tagId, string newName)
        {
            return TryExecute(() =>
            {
                Logger.LogInformation($"Updating tag {tagId} with new name {newName}");
                var tag = _tagRepository.Get(tagId);
                if (null != tag)
                {
                    tag.DisplayName = newName.RemoveMultipleWhiteSpaces();
                    tag.NormalizedName = newName.ConvertToUrl();
                    var rows = _tagRepository.Update(tag);
                    return new Response(rows > 0);
                }

                return new FailedResponse((int)ResponseFailureCode.TagNotFound);
            });
        }

        public Response Delete(int tagId)
        {
            return TryExecute(() =>
            {
                // 1. Delete Post-Tag Association
                var postTags = _postTagRepository.Get(new PostTagSpecial(tagId));
                _postTagRepository.Delete(postTags);

                // 2. Delte Tag itslef
                int rows = _tagRepository.Delete(tagId);
                return new SuccessResponse<bool>();
            });
        }

        public async Task<IReadOnlyList<HotTagViewModel>> GetHotTagsAsync(int top)
        {
            return await _tagRepository.GetAsQueryable()
                                        .Include(tag => tag.PostTag)
                                        .OrderByDescending(tag => tag.PostTag.Count)
                                        .Skip(0)
                                        .Take(top)
                                        .Select(tag => _mapper.Map<HotTagViewModel>(tag))
                                        .ToListAsync();
        }

        public TagViewModel GetTag(string normalizedName)
        {
            var spectial = new TagSpecial(normalizedName);

            return _tagRepository.SelectFirstOrDefault(spectial,
                                    tg => new TagViewModel()
                                    {
                                        Id = tg.Id,
                                        NormalizedTagName = tg.NormalizedName,
                                        TagName = tg.DisplayName
                                    });
        }

        public async Task<IReadOnlyList<string>> GetTagSuggestionAsync()
        {
            var spectial = new TagSpecial();
            return await _tagRepository.SelectAsync<string>(spectial, x => x.DisplayName.RemoveMultipleWhiteSpaces());
        }

        public async Task<IReadOnlyList<HotTagViewModel>> GetTagCountListAsync()
        {
            var list = await _tagRepository.SelectAsync(new TagSpecial(),
                                tag => _mapper.Map<HotTagViewModel>(tag));
            return list;
        }
    }
}