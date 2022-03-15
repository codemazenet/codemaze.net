using System.Net;

namespace CodeMaze.Results
{
    public class Result : IResult
    {
        public Result()
        {
        }

        public string Message { get; set; }

        public bool Successed { get; set; } = false;
        public int ResponseCode { get; set; }

        public static IResult Fail()
        {
            return new Result { ResponseCode = (int)HttpStatusCode.BadRequest, Successed = false };
        }

        public static IResult Fail(string message)
        {
            return new Result { ResponseCode = (int)HttpStatusCode.BadRequest, Successed = false, Message = message };
        }

        public static IResult Fail(int responseCode)
        {
            return new Result { ResponseCode = responseCode, Successed = false };
        }

        public static IResult Fail(string message, int responseCode)
        {
            return new Result { ResponseCode = responseCode, Successed = false, Message = message };
        }

        public static Task<IResult> FailAsync()
        {
            return Task.FromResult(Fail());
        }

        public static Task<IResult> FailAsync(string message)
        {
            return Task.FromResult(Fail(message));
        }

        public static Task<IResult> FailAsync(int responseCode)
        {
            return Task.FromResult(Fail(responseCode));
        }

        public static Task<IResult> FailAsync(string message, int responseCode)
        {
            return Task.FromResult(Fail(message, responseCode));
        }

        public static IResult Success()
        {
            return new Result { ResponseCode = (int)HttpStatusCode.OK, Successed = true };
        }

        public static IResult Success(string message)
        {
            return new Result { ResponseCode = (int)HttpStatusCode.OK, Successed = true, Message = message };
        }
        public static IResult Success(int responseCode)
        {
            return new Result { ResponseCode = responseCode, Successed = true };
        }

        public static IResult Success(string message, int responseCode)
        {
            return new Result { ResponseCode = responseCode, Successed = true, Message = message };
        }

        public static Task<IResult> SuccessAsync()
        {
            return Task.FromResult(Success());
        }

        public static Task<IResult> SuccessAsync(string message)
        {
            return Task.FromResult(Success(message));
        }

        public static Task<IResult> SuccessAsync(int responseCode)
        {
            return Task.FromResult(Success(responseCode));
        }

        public static Task<IResult> SuccessAsync(string message, int responseCode)
        {
            return Task.FromResult(Success(message, responseCode));
        }
    }

    public class Result<T> : Result, IResult<T>
    {
        public Result()
        {
            Data = default(T);
            Successed = false;
        }

        public T? Data { get; set; }

        public static new Result<T> Fail()
        {
            return new Result<T> { ResponseCode = (int)HttpStatusCode.BadRequest, Successed = false };
        }

        public static new Result<T> Fail(string message)
        {
            return new Result<T> { ResponseCode = (int)HttpStatusCode.BadRequest, Successed = false, Message = message };
        }

        public static new Result<T> Fail(int responseCode)
        {
            return new Result<T> { ResponseCode = responseCode, Successed = false };
        }

        public static new Result<T> Fail(string message, int responseCode)
        {
            return new Result<T> { ResponseCode = responseCode, Successed = false, Message = message };
        }

        public static new Task<Result<T>> FailAsync()
        {
            return Task.FromResult(Fail());
        }

        public static new Task<Result<T>> FailAsync(string message)
        {
            return Task.FromResult(Fail(message));
        }

        public static new Task<Result<T>> FailAsync(int responseCode)
        {
            return Task.FromResult(Fail(responseCode));
        }

        public static new Task<Result<T>> FailAsync(string message, int responseCode)
        {
            return Task.FromResult(Fail(message, responseCode));
        }

        public static new Result<T> Success()
        {
            return new Result<T> { ResponseCode = (int)HttpStatusCode.OK, Successed = true };
        }

        public static new Result<T> Success(string message)
        {
            return new Result<T> { ResponseCode = (int)HttpStatusCode.OK, Successed = true, Message = message };
        }

        public static Result<T> Success(T data)
        {
            return new Result<T> { ResponseCode = (int)HttpStatusCode.OK, Successed = true, Data = data };
        }

        public static Result<T> Success(T data, string message)
        {
            return new Result<T> { ResponseCode = (int)HttpStatusCode.OK, Successed = true, Data = data, Message = message };
        }

        public static new Task<Result<T>> SuccessAsync()
        {
            return Task.FromResult(Success());
        }

        public static new Task<Result<T>> SuccessAsync(string message)
        {
            return Task.FromResult(Success(message));
        }

        public static Task<Result<T>> SuccessAsync(T data)
        {
            return Task.FromResult(Success(data));
        }

        public static Task<Result<T>> SuccessAsync(Task<T> task)
        {
            var data = task.Result;
            return Task.FromResult(Success(data));
        }

        public static Task<Result<T>> SuccessAsync(T data, string message)
        {
            return Task.FromResult(Success(data, message));
        }
    }
}