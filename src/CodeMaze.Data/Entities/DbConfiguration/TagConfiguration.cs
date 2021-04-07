using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using CodeMaze.Data.Entities;

namespace CodeMaze.Data.Configurations
{
    internal class TagConfiguration : IEntityTypeConfiguration<TagEntity>
    {
        public void Configure(EntityTypeBuilder<TagEntity> builder)
        {
            builder.Property(e => e.DisplayName).HasMaxLength(32);
            builder.Property(e => e.NormalizedName).HasMaxLength(32);
        }
    }
}