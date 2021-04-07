USE [KaizinBlog]
GO
INSERT [dbo].[BlogConfiguration] ([Id], [CfgKey], [CfgValue], [LastModifiedTimeUtc]) VALUES (1, N'BlogOwnerSettings', N'{"Name":"Admin","Description":"Kizin Admin","ShortDescription":"Kizin Admin","AvatarBase64":""}', CAST(N'2019-06-16T21:52:04.140' AS DateTime))
INSERT [dbo].[BlogConfiguration] ([Id], [CfgKey], [CfgValue], [LastModifiedTimeUtc]) VALUES (2, N'ContentSettings', N'{"EnableComments":true,"UseFriendlyNotFoundImage":true,"EnableWordFilter":false,"PostListPageSize":10,"HotTagAmount":10,"DisharmonyWords":"fuck|shit"}', CAST(N'2019-06-16T21:52:04.143' AS DateTime))
INSERT [dbo].[BlogConfiguration] ([Id], [CfgKey], [CfgValue], [LastModifiedTimeUtc]) VALUES (3, N'EmailSettings', N'{"EnableEmailSending":true,"EnableSsl":true,"SendEmailOnCommentReply":true,"SendEmailOnNewComment":true,"SmtpServerPort":587,"AdminEmail":"","EmailDisplayName":"Kizin","SmtpPassword":"","SmtpServer":"","SmtpUserName":"","BannedMailDomain":""}', CAST(N'2019-06-16T21:52:04.143' AS DateTime))
INSERT [dbo].[BlogConfiguration] ([Id], [CfgKey], [CfgValue], [LastModifiedTimeUtc]) VALUES (4, N'FeedSettings', N'{"RssItemCount":20,"RssCopyright":"(c) {year} Kizin","RssDescription":"Latest posts from Kizin","RssGeneratorName":"Kizin","RssTitle":"Kizin","AuthorName":"Admin"}', CAST(N'2019-06-16T21:52:04.143' AS DateTime))
INSERT [dbo].[BlogConfiguration] ([Id], [CfgKey], [CfgValue], [LastModifiedTimeUtc]) VALUES (5, N'GeneralSettings', N'{"SiteTitle":"Kizin","LogoText":"Kizin","MetaKeyword":"Kizin","Copyright":"&copy; 2019","SideBarCustomizedHtmlPitch":""}', CAST(N'2019-06-16T21:52:04.147' AS DateTime))
INSERT [dbo].[BlogConfiguration] ([Id], [CfgKey], [CfgValue], [LastModifiedTimeUtc]) VALUES (6, N'WatermarkSettings', N'{"IsEnabled":true,"KeepOriginImage":false,"FontSize":20,"WatermarkText":"Kizin"}', CAST(N'2019-06-16T21:52:04.147' AS DateTime))
SET IDENTITY_INSERT [dbo].[User] ON 

INSERT [dbo].[User] ([Id], [UserName], [Password], [Salt], [DisplayName], [Phone], [Email], [About], [Avatar], [Role]) VALUES (1, N'admin', N'AHNUF+clXx0rX7p6piJDtpJVUccviJ2bMFGZPfOSfAwbc8893brTaDltfYwuyjD3rg==', N'Cu9ZU71UM', N'Admin', NULL, N'khanhnd157@gmail.com', NULL, NULL, N'Administrator')
INSERT [dbo].[User] ([Id], [UserName], [Password], [Salt], [DisplayName], [Phone], [Email], [About], [Avatar], [Role]) VALUES (2, N'khanhnd157', N'AL5wHmCMvLqAqm/jnwqdk/UF506RJmdn5eETM5K63MJGafo1m6U94MhCzJWLZD2DcQ==', N'yVoJ7B31B', N'Duy Khanh', NULL, N'luv.keny@gmail.com', NULL, NULL, N'Member')
SET IDENTITY_INSERT [dbo].[User] OFF
