using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using CodeMaze.Data.Entities;

namespace CodeMaze.Data.Configurations
{
    internal class CategoryConfiguration : IEntityTypeConfiguration<CategoryEntity>
    {
        public void Configure(EntityTypeBuilder<CategoryEntity> builder)
        {
            builder.Property(e => e.Id).ValueGeneratedOnAdd();
            builder.Property(e => e.DisplayName).HasMaxLength(64);
            builder.Property(e => e.Note).HasMaxLength(128);
            builder.Property(e => e.Url).HasMaxLength(64);
            builder.Property(e => e.Code).HasMaxLength(64);
            builder.Property(e => e.ShowOnTab).HasDefaultValue(0);
        }
    }
}