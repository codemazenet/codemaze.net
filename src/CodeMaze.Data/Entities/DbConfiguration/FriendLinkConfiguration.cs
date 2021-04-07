using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using CodeMaze.Data.Entities;

namespace CodeMaze.Data.Configurations
{
    public class FriendLinkConfiguration : IEntityTypeConfiguration<FriendLinkEntity>
    {
        public void Configure(EntityTypeBuilder<FriendLinkEntity> builder)
        {
            builder.Property(e => e.Id).ValueGeneratedOnAdd();
            builder.Property(e => e.Title).HasMaxLength(64);
            builder.Property(e => e.LinkUrl).HasMaxLength(256);
        }
    }
}