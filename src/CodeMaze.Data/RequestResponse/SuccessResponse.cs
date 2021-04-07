namespace CodeMaze.Data.RequestResponse
{
    public class SuccessResponse<T> : Response<T>
    {
        public SuccessResponse()
        {
            IsSuccess = true;
        }

        public SuccessResponse(T item = default(T)) : base(item)
        {
            IsSuccess = true;
        }
    }

    public class SuccessResponse : Response
    {
        public SuccessResponse()
        {
            IsSuccess = true;
        }

        public SuccessResponse(string message)
        {
            IsSuccess = true;
            Message = message;
        }
    }
}