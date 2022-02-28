namespace CodeMaze.ViewModels
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