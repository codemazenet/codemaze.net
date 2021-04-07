using AutoMapper;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using CodeMaze.Configuration;
using CodeMaze.Data.Entities;
using CodeMaze.Data.RequestResponse;
using CodeMaze.Data.Systems;
using CodeMaze.Data.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace CodeMaze.Service
{
    public class CommentService : KyzinService
    {
        private readonly IBlogConfig _blogConfig;

        private readonly IRepository<CommentEntity> _commentRepository;

        private readonly IRepository<CommentReplyEntity> _commentReplyRepository;

        public CommentService(
            ILogger<CommentService> logger,
            IOptions<AppSettings> settings,
            IMapper mapper,
            IBlogConfig blogConfig,
            IRepository<CommentEntity> commentRepository,
            IRepository<CommentReplyEntity> commentReplyRepository) : base(logger, mapper, settings)
        {
            _blogConfig = blogConfig;
            _commentRepository = commentRepository;
            _commentReplyRepository = commentReplyRepository;
        }

        public async Task<Response> AddAsync(CommentRequest comment)
        {
            try
            {
                if (comment.CommentId.HasValue && !comment.CommentId.Equals(Guid.Empty))
                {
                    // Add reply comment
                    var commentReplyEntity = _mapper.Map<CommentReplyEntity>(comment);
                    var result = await _commentReplyRepository.AddAsync(commentReplyEntity);
                    return new SuccessResponse<CommentReplyEntity>(result);
                }
                else
                {
                    // Add comment
                    var commentEntity = _mapper.Map<CommentEntity>(comment);
                    var result = await _commentRepository.AddAsync(commentEntity);
                    return new SuccessResponse<CommentEntity>(result);
                    
                }
            }
            catch (Exception ex)
            {
                return new FailedResponse((int)HttpStatusCode.Created, ex.Message);
            }
        }

        public int CountComments()
        {
            return _commentRepository.Count(c => true);
        }

        public Task<IReadOnlyList<PostCommentListItem>> GetSelectedOfPostAsync(Guid postId)
        {
            var spec = new CommentSpecial(postId);

            return _commentRepository.SelectAsync(spec, c => new PostCommentListItem
            {
                Id = c.Id,
                CommentContent = c.CommentContent,
                CreateOnUtc = c.CreateOnUtc,
                Username = c.Username,
                CommentReplies = c.CommentReply.Select(cr => new CommentReplyItem
                {
                    Id = cr.Id,
                    ParentId = c.Id,
                    ReplyContent = cr.ReplyContent,
                    ReplyTimeUtc = cr.ReplyTimeUtc.GetValueOrDefault()
                }).ToList()
            });
        }

        public Task<IReadOnlyList<CommentViewModel>> GetCommentsByUsernameAsync(string username)
        {
            var spec = new CommentSpecial(username, 1, 20);

            var comments = _commentRepository.SelectAsync(spec, c => _mapper.Map<CommentViewModel>(c), false);

            return comments;
        }

        //public Task<Response<IReadOnlyList<CommentListItem>>> GetPagedCommentAsync(int pageSize, int pageIndex)
        //{
        //    return TryExecuteAsync<IReadOnlyList<CommentListItem>>(async () =>
        //    {
        //        if (pageSize < 1)
        //        {
        //            throw new ArgumentOutOfRangeException(nameof(pageSize), $"{nameof(pageSize)} can not be less than 1.");
        //        }

        //        var spec = new Specification<CommentEntity>();
        //        spec.ApplyPaging(pageIndex, pageSize);

        //        var comments = await _commentRepository.SelectAsync(spec, p => new CommentListItem
        //        {
        //            Id = p.Id,
        //            CommentContent = p.CommentContent,
        //            CreateOnUtc = p.CreateOnUtc,
        //            Email = p.Email,
        //            IpAddress = p.IPAddress,
        //            Username = p.Username,
        //            IsApproved = p.IsApproved,
        //            PostTitle = p.Post.Title,
        //            CommentReplies = p.CommentReply.Select(cr => new CommentReplyItem
        //            {
        //                ReplyContent = cr.ReplyContent,
        //                ReplyTimeUtc = cr.ReplyTimeUtc.GetValueOrDefault()
        //            }).ToList()
        //        });

        //        return new SuccessResponse<IReadOnlyList<CommentListItem>>(comments);
        //    });
        //}

        //public Task<Response> ToggleCommentApprovalStatus(Guid[] commentIds)
        //{
        //    return TryExecuteAsync(async () =>
        //    {
        //        if (null == commentIds || !commentIds.Any())
        //        {
        //            throw new ArgumentNullException(nameof(commentIds));
        //        }

        //        var spec = new Specification<CommentEntity>(p => commentIds.Contains(p.Id));
        //        var comments = await _commentRepository.GetAsync(spec);
        //        foreach (var cmt in comments)
        //        {
        //            cmt.IsApproved = !cmt.IsApproved;
        //            await _commentRepository.UpdateAsync(cmt);
        //        }

        //        return new SuccessResponse();
        //    });
        //}

        //public Task<Response> DeleteComments(Guid[] commentIds)
        //{
        //    return TryExecuteAsync(async () =>
        //    {
        //        var spec = new Specification<CommentEntity>(p => commentIds.Contains(p.Id));
        //        var comments = await _commentRepository.GetAsync(spec);
        //        foreach (var cmt in comments)
        //        {
        //            // 1. Delete all replies
        //            var cReplies = await _commentReplyRepository.GetAsync(new Specification<CommentReplyEntity>(c => c.CommentId.Equals(cmt.Id)));
        //            if (cReplies.Any())
        //            {
        //                _commentReplyRepository.Delete(cReplies);
        //            }

        //            // 2. Delete comment itself
        //            _commentRepository.Delete(cmt);
        //        }

        //        return new SuccessResponse();
        //    });
        //}

        //public Task<Response<CommentEntity>> AddCommentAsync(NewCommentRequest request)
        //{
        //    return TryExecuteAsync<CommentEntity>(async () =>
        //    {
        //        // 1. Check comment enabled or not
        //        if (!_blogConfig.ContentSettings.EnableComments)
        //        {
        //            return new FailedResponse<CommentEntity>((int)ResponseFailureCode.CommentDisabled);
        //        }

        //        // 2. Check user email domain
        //        var bannedDomains = _blogConfig.EmailSettings.BannedMailDomain;
        //        if (bannedDomains.Any())
        //        {
        //            var address = new MailAddress(request.Email);
        //            if (bannedDomains.Contains(address.Host))
        //            {
        //                return new FailedResponse<CommentEntity>((int)ResponseFailureCode.EmailDomainBlocked);
        //            }
        //        }

        //        // 3. Encode HTML
        //        request.Username = HttpUtility.HtmlEncode(request.Username);

        //        // 4. Harmonize banned keywords
        //        if (_blogConfig.ContentSettings.EnableWordFilter)
        //        {
        //            var dw = _blogConfig.ContentSettings.DisharmonyWords;
        //            var maskWordFilter = new MaskWordFilter(new StringWordSource(dw));
        //            request.Username = maskWordFilter.FilterContent(request.Username);
        //            request.Content = maskWordFilter.FilterContent(request.Content);
        //        }

        //        var model = new CommentEntity
        //        {
        //            Id = Guid.NewGuid(),
        //            Username = request.Username,
        //            CommentContent = request.Content,
        //            PostId = request.PostId,
        //            CreateOnUtc = DateTime.UtcNow,
        //            Email = request.Email,
        //            IPAddress = request.IpAddress,
        //            IsApproved = false,
        //            UserAgent = request.UserAgent
        //        };

        //        await _commentRepository.AddAsync(model);
        //        return new SuccessResponse<CommentEntity>(model);
        //    });
        //}

        public Response<CommentReplySummary> AddReply(Guid commentId, string replyContent, string ipAddress, string userAgent)
        {
            return TryExecute<CommentReplySummary>(() =>
            {
                if (!_blogConfig.ContentSettings.EnableComments)
                {
                    return new FailedResponse<CommentReplySummary>((int)ResponseFailureCode.CommentDisabled);
                }

                var cmt = _commentRepository.Get(commentId);

                if (null == cmt)
                {
                    return new FailedResponse<CommentReplySummary>((int)ResponseFailureCode.CommentNotFound);
                }

                var id = Guid.NewGuid();
                var model = new CommentReplyEntity
                {
                    Id = id,
                    ReplyContent = replyContent,
                    IpAddress = ipAddress,
                    UserAgent = userAgent,
                    ReplyTimeUtc = DateTime.UtcNow,
                    CommentId = commentId
                };

                _commentReplyRepository.Add(model);

                var summary = new CommentReplySummary
                {
                    CommentContent = cmt.CommentContent,
                    CommentId = commentId,
                    Email = cmt.Email,
                    Id = model.Id,
                    IpAddress = model.IpAddress,
                    PostId = cmt.PostId,
                    PubDateUtc = cmt.Post.PubDateUtc,
                    ReplyContent = model.ReplyContent,
                    ReplyTimeUtc = model.ReplyTimeUtc,
                    Slug = cmt.Post.Code,
                    Title = cmt.Post.Title,
                    UserAgent = model.UserAgent
                };

                return new SuccessResponse<CommentReplySummary>(summary);
            });
        }

        public Task<int> CountByUsernameAsync(string username)
        {
            var spec = new CommentSpecial(username);

            var count = _commentRepository.CountAsync(spec);

            return count;
        }
    }
}