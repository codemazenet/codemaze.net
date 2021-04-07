using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using CodeMaze.Data.Entities;

namespace CodeMaze.Data.Configurations
{
    internal class UserConfiguration : IEntityTypeConfiguration<UserEntity>
    {
        public void Configure(EntityTypeBuilder<UserEntity> builder)
        {
            builder.Property(e => e.Id).ValueGeneratedOnAdd();
            builder.Property(e => e.UserName).HasMaxLength(100);
            builder.Property(e => e.Password).HasMaxLength(200);
            builder.Property(e => e.Email).HasMaxLength(128);
            builder.Property(e => e.About).HasMaxLength(500);
            builder.Property(e => e.Avatar).HasMaxLength(128);
            builder.Property(e => e.Phone).HasMaxLength(50);
        }
    }
}