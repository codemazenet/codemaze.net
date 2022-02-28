using CodeMaze.Data.Entities;

using Microsoft.EntityFrameworkCore;

using System;
using System.Linq;

namespace CodeMaze.Service
{
    public sealed class PostSpecial : BaseSpecification<PostEntity>
    {
        public PostSpecial(Guid? categoryId, int? top = null) :
            base(p => !p.IsDeleted &&
                      p.IsPublished &&
                      p.IsFeedIncluded &&
                      (categoryId == null || p.PostCategory.Any(c => c.CategoryId == categoryId.Value)))
        {
            // AddInclude(p => p);
            ApplyOrderByDescending(p => p.PubDateUtc);

            if (top.HasValue)
            {
                ApplyPaging(0, top.Value);
            }
        }

        //public PostSpecial(int year, int month = 0) :
        //    base(p => p.PubDateUtc.Value.Year == year &&
        //              (month == 0 || p.PubDateUtc.Value.Month == month))
        //{
        //    // Fix #313: Filter out unpublished posts
        //    AddCriteria(p => p.IsPublished && !p.IsDeleted);

        //    AddInclude(post => post.Include(p => p));
        //    ApplyOrderByDescending(p => p.PubDateUtc);
        //}

        //public PostSpecial(DateTime date, string slug)
        //    : base(p => p.Slug == slug &&
        //     p.IsPublished &&
        //     p.PubDateUtc.Value.Date == date &&
        //     !p.IsDeleted)
        //{
        //    AddInclude(post => post
        //        .Include(p => p)
        //        .Include(p => p.PostExtension)
        //        .Include(p => p.Comment)
        //        .Include(p => p.PostTag).ThenInclude(pt => pt.Tag)
        //        .Include(p => p.PostCategory).ThenInclude(pc => pc.Category));
        //}

        public PostSpecial(int index, int size)
            : base(p => !p.IsDeleted && p.IsPublished)
        {
            AddInclude(post => post
                .Include(p => p.PostExtension)
                .Include(p => p.Comment));

            ApplyOrderByDescending(p => p.PubDateUtc);

            ApplyPaging((index - 1) * size, size);
        }

        public PostSpecial(Guid id, bool includeRelatedData = true) : base(p => p.Id == id)
        {
            if (includeRelatedData)
            {
                AddInclude(post => post
                    .Include(p => p)
                    .Include(p => p.PostTag)
                    .ThenInclude(pt => pt.Tag)
                    .Include(p => p.PostCategory)
                    .ThenInclude(pc => pc.Category));
            }
        }

        public PostSpecial(PostPublishStatus status)
        {
            switch (status)
            {
                case PostPublishStatus.Draft:
                    AddCriteria(p => !p.IsPublished && !p.IsDeleted);
                    break;

                case PostPublishStatus.Published:
                    AddCriteria(p => p.IsPublished && !p.IsDeleted);
                    break;

                case PostPublishStatus.Deleted:
                    AddCriteria(p => p.IsDeleted);
                    break;

                case PostPublishStatus.NotSet:
                    AddCriteria(p => true);
                    break;

                default:
                    throw new ArgumentOutOfRangeException(nameof(status), status, null);
            }
        }

        public PostSpecial(bool isDeleted) :
            base(p => p.IsDeleted == isDeleted)
        {
        }

        public PostSpecial() :
            base(p => !p.IsDeleted && p.IsPublished)
        {
        }

        public PostSpecial(string tagName, int skip, int take)
        {
            AddInclude(post =>
                            post.Include(p => p.PostTag)
                                    .ThenInclude(pt => pt.Tag)
                                .Include(p => p.PostCategory)
                                    .ThenInclude(pc => pc.Category)
                                .Include(p => p.PostExtension));

            AddCriteria(p => p.IsPublished &&
                            !p.IsDeleted &&
                             p.PostTag.Any(pt => pt.Tag.NormalizedName.Contains(tagName)));

            ApplyOrderByDescending(p => p.CreateOnUtc);

            ApplyPaging(skip, take);
        }


        public PostSpecial(int userId, int skip, int take)
        {
            AddInclude(post =>
                            post.Include(p => p.PostCategory)
                                    .ThenInclude(pc => pc.Category)
                                .Include(p => p.PostExtension));

            AddCriteria(p => p.IsPublished &&
                            !p.IsDeleted &&
                             p.UserId.Equals(userId));

            ApplyOrderByDescending(p => p.CreateOnUtc);

            ApplyPaging(skip, take);
        }


        public PostSpecial(int userId)
        {
            AddInclude(post =>
                            post.Include(p => p.PostCategory)
                                    .ThenInclude(pc => pc.Category)
                                .Include(p => p.PostExtension));

            AddCriteria(p => p.IsPublished &&
                            !p.IsDeleted &&
                             p.UserId.Equals(userId));

            //ApplyOrderByDescending(p => p.CreateOnUtc);
        }
    }
}