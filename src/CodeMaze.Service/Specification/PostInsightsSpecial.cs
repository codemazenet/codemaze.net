using CodeMaze.Data.Entities;
using System;

namespace CodeMaze.Service
{
    public sealed class PostInsightsSpecial : BaseSpecification<PostEntity>
    {
        public PostInsightsSpecial(PostInsightsType insightsType, int top) :
            base(p => !p.IsDeleted
                      && p.IsPublished
                      && p.PubDateUtc >= DateTime.UtcNow.AddYears(-1))
        {
            switch (insightsType)
            {
                case PostInsightsType.TopRead:
                    ApplyOrderByDescending(p => p.PostExtension.Hits);
                    break;

                case PostInsightsType.TopCommented:
                    ApplyOrderByDescending(p => p.Comment.Count);
                    break;

                default:
                    throw new ArgumentOutOfRangeException(nameof(insightsType), insightsType, null);
            }

            ApplyPaging(0, top);
        }
    }

    public enum PostInsightsType
    {
        TopRead = 0,
        TopCommented = 1
    }
}