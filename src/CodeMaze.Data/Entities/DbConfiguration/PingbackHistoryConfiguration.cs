using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using CodeMaze.Data.Entities;

namespace CodeMaze.Data.Configurations
{
    internal class PingbackHistoryConfiguration : IEntityTypeConfiguration<PingbackHistoryEntity>
    {
        public void Configure(EntityTypeBuilder<PingbackHistoryEntity> builder)
        {
            builder.Property(e => e.Id).ValueGeneratedOnAdd();
            builder.Property(e => e.Domain).HasMaxLength(256);
            builder.Property(e => e.PingTimeUtc).HasColumnType("datetime");
            builder.Property(e => e.SourceIp).HasMaxLength(64);
            builder.Property(e => e.SourceTitle).HasMaxLength(256);
            builder.Property(e => e.SourceUrl).HasMaxLength(256);
        }
    }
}