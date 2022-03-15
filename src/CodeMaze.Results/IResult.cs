namespace CodeMaze.Results
{
    public interface IResult
    {
        string Message { get; set; }
        bool Successed { get; set; }
        int ResponseCode { get; set; }
    }

    public interface IResult<out T> : IResult
    {
        T? Data { get; }
    }

}