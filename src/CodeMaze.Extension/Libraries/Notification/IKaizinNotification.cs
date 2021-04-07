using CodeMaze.Data.Entities;
using CodeMaze.Data.RequestResponse;
using CodeMaze.Data.ViewModels;
using System;
using System.Threading.Tasks;

namespace CodeMaze.Extension.Notification
{
    public interface IKaizinNotification
    {
        bool IsEnabled { get; set; }

        Task<Response> SendTestNotificationAsync();

        Task SendNewCommentNotificationAsync(CommentEntity commentEntity, string postTitle,
            Func<string, string> funcCommentContentFormat);

        Task SendCommentReplyNotification(CommentReplySummary model, string postLink);

        Task SendPingNotification(PingbackHistoryEntity receivedPingback, string postTitle);
    }
}