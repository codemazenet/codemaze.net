using CodeMaze.Data.Entities;

namespace CodeMaze.Service
{
    public sealed class TagSpecial : BaseSpecification<TagEntity>
    {
        public TagSpecial()
        {
        }

        public TagSpecial(int top) : base(t => true)
        {
            ApplyPaging(0, top);
            ApplyOrderByDescending(p => p.PostTag.Count);
        }

        public TagSpecial(string normalizedName) : base(t => t.NormalizedName == normalizedName)
        {
        }
    }
}