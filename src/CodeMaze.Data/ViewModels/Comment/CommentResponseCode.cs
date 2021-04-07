namespace CodeMaze.Data.ViewModels
{
    public enum CommentResponseCode
    {
        Success,
        UnknownError,
        WrongCaptcha,
        EmailDomainBlocked,
        CommentDisabled,
        InvalidModel
    }
}