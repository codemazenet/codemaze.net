using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using CodeMaze.Data.Entities;

namespace CodeMaze.Data.Configurations
{
    public class PostConfiguration : IEntityTypeConfiguration<PostEntity>
    {
        public void Configure(EntityTypeBuilder<PostEntity> builder)
        {
            builder.Property(e => e.Id).ValueGeneratedOnAdd();
            builder.Property(e => e.CommentEnabled);
            builder.Property(e => e.ContentAbstract).HasMaxLength(1024);

            builder.Property(e => e.CreateOnUtc).HasColumnType("datetime");
            builder.Property(e => e.PubDateUtc).HasColumnType("datetime");
            builder.Property(e => e.LastModifiedUtc).HasColumnType("datetime");
            builder.Property(e => e.PostContent);

            builder.Property(e => e.Code).HasMaxLength(64);
            builder.Property(e => e.Url).HasMaxLength(128);
            builder.Property(e => e.Title).HasMaxLength(128);
        }
    }
}