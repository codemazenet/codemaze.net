using Microsoft.EntityFrameworkCore;
using CodeMaze.Data.Configurations;
using CodeMaze.Data.Entities;

namespace CodeMaze.Data
{
    public class KyzinDbContext : DbContext
    {
        public KyzinDbContext()
        {
        }

        public KyzinDbContext(DbContextOptions options)
            : base(options)
        {
        }

        public virtual DbSet<CategoryEntity> Category { get; set; }
        public virtual DbSet<CommentEntity> Comment { get; set; }
        public virtual DbSet<CommentReplyEntity> CommentReply { get; set; }
        public virtual DbSet<PingbackHistoryEntity> PingbackHistory { get; set; }
        public virtual DbSet<PostEntity> Post { get; set; }
        public virtual DbSet<PostCategoryEntity> PostCategory { get; set; }
        public virtual DbSet<PostExtensionEntity> PostExtension { get; set; }
        public virtual DbSet<PostTagEntity> PostTag { get; set; }
        public virtual DbSet<TagEntity> Tag { get; set; }
        public virtual DbSet<FriendLinkEntity> FriendLink { get; set; }
        public virtual DbSet<CustomPageEntity> CustomPage { get; set; }
        public virtual DbSet<UserEntity> User { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new CategoryConfiguration());
            modelBuilder.ApplyConfiguration(new CommentConfiguration());
            modelBuilder.ApplyConfiguration(new CommentReplyConfiguration());
            modelBuilder.ApplyConfiguration(new PingbackHistoryConfiguration());
            modelBuilder.ApplyConfiguration(new PostConfiguration());
            modelBuilder.ApplyConfiguration(new PostCategoryConfiguration());
            modelBuilder.ApplyConfiguration(new PostExtensionConfiguration());
            modelBuilder.ApplyConfiguration(new PostTagConfiguration());
            modelBuilder.ApplyConfiguration(new TagConfiguration());
            modelBuilder.ApplyConfiguration(new FriendLinkConfiguration());
            modelBuilder.ApplyConfiguration(new CustomPageConfiguration());
            modelBuilder.ApplyConfiguration(new UserConfiguration());
        }
    }
}