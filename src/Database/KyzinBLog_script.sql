USE [KaizinBlog]
GO
/****** Object:  Table [dbo].[BlogConfiguration]    Script Date: 10/30/2020 11:40:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BlogConfiguration](
	[Id] [int] NOT NULL,
	[CfgKey] [varchar](64) NULL,
	[CfgValue] [nvarchar](max) NULL,
	[LastModifiedTimeUtc] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Category]    Script Date: 10/30/2020 11:40:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Category](
	[Id] [uniqueidentifier] NOT NULL,
	[Url] [nvarchar](64) NULL,
	[DisplayName] [nvarchar](64) NULL,
	[Note] [nvarchar](128) NULL,
	[Code] [nvarchar](32) NULL,
	[Position] [int] NULL,
	[Deleted] [bit] NOT NULL,
	[ShowOnTab] [bit] NOT NULL,
 CONSTRAINT [PK_CategoryId_Primary] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Comment]    Script Date: 10/30/2020 11:40:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Comment](
	[Id] [uniqueidentifier] NOT NULL,
	[Username] [nvarchar](64) NULL,
	[Email] [nvarchar](128) NULL,
	[IPAddress] [nvarchar](64) NULL,
	[CreateOnUtc] [datetime] NOT NULL,
	[CommentContent] [nvarchar](max) NOT NULL,
	[PostId] [uniqueidentifier] NOT NULL,
	[IsApproved] [bit] NOT NULL,
	[UserAgent] [nvarchar](512) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CommentReply]    Script Date: 10/30/2020 11:40:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CommentReply](
	[Id] [uniqueidentifier] NOT NULL,
	[ReplyContent] [nvarchar](max) NULL,
	[ReplyTimeUtc] [datetime] NULL,
	[UserAgent] [nvarchar](512) NULL,
	[IpAddress] [nvarchar](64) NULL,
	[CommentId] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CustomPage]    Script Date: 10/30/2020 11:40:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CustomPage](
	[Id] [uniqueidentifier] NOT NULL,
	[Title] [nvarchar](128) NULL,
	[RouteName] [nvarchar](128) NULL,
	[HtmlContent] [nvarchar](max) NULL,
	[CssContent] [nvarchar](max) NULL,
	[HideSidebar] [bit] NOT NULL,
	[CreateOnUtc] [datetime] NOT NULL,
	[UpdatedOnUtc] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FileManager]    Script Date: 10/30/2020 11:40:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FileManager](
	[Id] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[Name] [nvarchar](100) NULL,
	[Type] [smallint] NULL,
	[PhysicalPath] [nvarchar](500) NULL,
 CONSTRAINT [PK_FileManager] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FileRelationship]    Script Date: 10/30/2020 11:40:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FileRelationship](
	[FileId] [uniqueidentifier] NOT NULL,
	[FolderId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_FileRelationship] PRIMARY KEY CLUSTERED 
(
	[FileId] ASC,
	[FolderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FriendLink]    Script Date: 10/30/2020 11:40:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FriendLink](
	[Id] [uniqueidentifier] NOT NULL,
	[Title] [nvarchar](64) NULL,
	[LinkUrl] [nvarchar](256) NULL,
	[ContentHtml] [nvarchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PingbackHistory]    Script Date: 10/30/2020 11:40:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PingbackHistory](
	[Id] [uniqueidentifier] NOT NULL,
	[Domain] [nvarchar](256) NULL,
	[SourceUrl] [nvarchar](256) NULL,
	[SourceTitle] [nvarchar](256) NULL,
	[SourceIp] [nvarchar](64) NULL,
	[TargetPostId] [uniqueidentifier] NOT NULL,
	[PingTimeUtc] [datetime] NOT NULL,
	[TargetPostTitle] [nvarchar](128) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Post]    Script Date: 10/30/2020 11:40:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Post](
	[Id] [uniqueidentifier] NOT NULL,
	[Title] [nvarchar](128) NULL,
	[Url] [nvarchar](128) NULL,
	[Code] [nvarchar](32) NULL,
	[PostContent] [nvarchar](max) NULL,
	[CommentEnabled] [bit] NOT NULL,
	[CreateOnUtc] [datetime] NULL,
	[ContentAbstract] [nvarchar](1024) NULL,
	[Image] [nvarchar](128) NULL,
	[UserId] [int] NOT NULL,
	[MetaTitle] [nvarchar](150) NULL,
	[MetaKeywords] [nvarchar](250) NULL,
	[MetaDescription] [nvarchar](250) NULL,
	[ExposedToSiteMap] [bit] NULL,
	[IsFeedIncluded] [bit] NULL,
	[PubDateUtc] [datetime] NULL,
	[LastModifiedUtc] [datetime] NOT NULL,
	[IsPublished] [bit] NOT NULL,
	[IsDeleted] [bit] NOT NULL,
	[Revision] [int] NOT NULL,
 CONSTRAINT [PK_PostId_Primary] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PostCategory]    Script Date: 10/30/2020 11:40:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PostCategory](
	[PostId] [uniqueidentifier] NOT NULL,
	[CategoryId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_PostCategory] PRIMARY KEY CLUSTERED 
(
	[PostId] ASC,
	[CategoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PostExtension]    Script Date: 10/30/2020 11:40:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PostExtension](
	[PostId] [uniqueidentifier] NOT NULL,
	[Hits] [int] NOT NULL,
	[Likes] [int] NOT NULL,
	[Views] [int] NOT NULL,
	[Comments] [int] NOT NULL,
 CONSTRAINT [PK__PostExte__AA1260188C33D0B6] PRIMARY KEY CLUSTERED 
(
	[PostId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PostPublish]    Script Date: 10/30/2020 11:40:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PostPublish](
	[PostId] [uniqueidentifier] NOT NULL,
	[IsPublished] [bit] NOT NULL,
	[ExposedToSiteMap] [bit] NOT NULL,
	[IsFeedIncluded] [bit] NOT NULL,
	[LastModifiedUtc] [datetime] NULL,
	[IsDeleted] [bit] NOT NULL,
	[PubDateUtc] [datetime] NULL,
	[Revision] [int] NULL,
	[PublisherIp] [nvarchar](64) NULL,
	[ContentLanguageCode] [nvarchar](8) NULL,
PRIMARY KEY CLUSTERED 
(
	[PostId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PostTag]    Script Date: 10/30/2020 11:40:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PostTag](
	[PostId] [uniqueidentifier] NOT NULL,
	[TagId] [int] NOT NULL,
 CONSTRAINT [PK_PostTag] PRIMARY KEY CLUSTERED 
(
	[PostId] ASC,
	[TagId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PostView]    Script Date: 10/30/2020 11:40:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PostView](
	[PostId] [uniqueidentifier] NOT NULL,
	[IpClient] [nvarchar](15) NOT NULL,
 CONSTRAINT [PK_PostView] PRIMARY KEY CLUSTERED 
(
	[PostId] ASC,
	[IpClient] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tag]    Script Date: 10/30/2020 11:40:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tag](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[DisplayName] [nvarchar](32) NULL,
	[NormalizedName] [nvarchar](32) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 10/30/2020 11:40:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](100) NOT NULL,
	[Password] [nvarchar](200) NOT NULL,
	[Salt] [nvarchar](16) NOT NULL,
	[DisplayName] [nvarchar](128) NULL,
	[Phone] [nvarchar](50) NULL,
	[Email] [nvarchar](128) NULL,
	[About] [nvarchar](500) NULL,
	[Avatar] [nvarchar](128) NULL,
	[Role] [nvarchar](50) NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[UserName] ASC,
	[Password] ASC,
	[Salt] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Category] ADD  CONSTRAINT [DF_Category_Position]  DEFAULT ((1)) FOR [Position]
GO
ALTER TABLE [dbo].[Category] ADD  CONSTRAINT [DF_Category_IsDelete]  DEFAULT ((0)) FOR [Deleted]
GO
ALTER TABLE [dbo].[Category] ADD  CONSTRAINT [DF_Category_ShowOnTab]  DEFAULT ((0)) FOR [ShowOnTab]
GO
ALTER TABLE [dbo].[FileManager] ADD  CONSTRAINT [DF_FileManager_Id]  DEFAULT (newid()) FOR [Id]
GO
ALTER TABLE [dbo].[Post] ADD  CONSTRAINT [DF_Post_CommentEnabled]  DEFAULT ((1)) FOR [CommentEnabled]
GO
ALTER TABLE [dbo].[Post] ADD  CONSTRAINT [DF_Post_UserId]  DEFAULT ((1)) FOR [UserId]
GO
ALTER TABLE [dbo].[Post] ADD  CONSTRAINT [DF_Post_LastModifiedUtc]  DEFAULT (getdate()) FOR [LastModifiedUtc]
GO
ALTER TABLE [dbo].[Post] ADD  CONSTRAINT [DF_Post_IsPublished]  DEFAULT ((1)) FOR [IsPublished]
GO
ALTER TABLE [dbo].[Post] ADD  CONSTRAINT [DF_Post_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
ALTER TABLE [dbo].[Post] ADD  CONSTRAINT [DF_Post_Revision]  DEFAULT ((1)) FOR [Revision]
GO
ALTER TABLE [dbo].[PostExtension] ADD  CONSTRAINT [DF_PostExtension_Hits]  DEFAULT ((0)) FOR [Hits]
GO
ALTER TABLE [dbo].[PostExtension] ADD  CONSTRAINT [DF_PostExtension_Likes]  DEFAULT ((0)) FOR [Likes]
GO
ALTER TABLE [dbo].[PostExtension] ADD  CONSTRAINT [DF_PostExtension_Views]  DEFAULT ((0)) FOR [Views]
GO
ALTER TABLE [dbo].[PostExtension] ADD  CONSTRAINT [DF_PostExtension_Comments]  DEFAULT ((0)) FOR [Comments]
GO
ALTER TABLE [dbo].[User] ADD  CONSTRAINT [DF_User_Avatar]  DEFAULT (N'/themes/default/images/avatar.png') FOR [Avatar]
GO
ALTER TABLE [dbo].[User] ADD  CONSTRAINT [DF_User_Role]  DEFAULT (N'Member') FOR [Role]
GO
ALTER TABLE [dbo].[Comment]  WITH CHECK ADD  CONSTRAINT [FK_Comment_Post] FOREIGN KEY([PostId])
REFERENCES [dbo].[Post] ([Id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Comment] CHECK CONSTRAINT [FK_Comment_Post]
GO
ALTER TABLE [dbo].[PostCategory]  WITH CHECK ADD  CONSTRAINT [FK_PostCategory_Category] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[Category] ([Id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[PostCategory] CHECK CONSTRAINT [FK_PostCategory_Category]
GO
ALTER TABLE [dbo].[PostCategory]  WITH CHECK ADD  CONSTRAINT [FK_PostCategory_Post] FOREIGN KEY([PostId])
REFERENCES [dbo].[Post] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[PostCategory] CHECK CONSTRAINT [FK_PostCategory_Post]
GO
ALTER TABLE [dbo].[PostExtension]  WITH CHECK ADD  CONSTRAINT [FK_PostExtension_Post] FOREIGN KEY([PostId])
REFERENCES [dbo].[Post] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[PostExtension] CHECK CONSTRAINT [FK_PostExtension_Post]
GO
ALTER TABLE [dbo].[PostPublish]  WITH CHECK ADD  CONSTRAINT [FK_PostPublish_Post] FOREIGN KEY([PostId])
REFERENCES [dbo].[Post] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[PostPublish] CHECK CONSTRAINT [FK_PostPublish_Post]
GO
ALTER TABLE [dbo].[PostTag]  WITH CHECK ADD  CONSTRAINT [FK_PostTag_Post] FOREIGN KEY([PostId])
REFERENCES [dbo].[Post] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[PostTag] CHECK CONSTRAINT [FK_PostTag_Post]
GO
ALTER TABLE [dbo].[PostTag]  WITH CHECK ADD  CONSTRAINT [FK_PostTag_Tag] FOREIGN KEY([TagId])
REFERENCES [dbo].[Tag] ([Id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[PostTag] CHECK CONSTRAINT [FK_PostTag_Tag]
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'File manager' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'FileManager'
GO
