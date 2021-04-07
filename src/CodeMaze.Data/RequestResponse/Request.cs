using System;

namespace CodeMaze.Data.RequestResponse
{
    public class Request
    {
        public string RequestId { get; set; }

        public DateTimeOffset RequestTime { get; set; }
    }

    public class Request<T> : Request
    {
        public T Item { get; set; }

        public Request(T item = default(T))
        {
            Item = item;
        }
    }
}