using System;

namespace CodeMaze.ViewModels
{
    public class TokenValidateViewModel
    {
        public Guid SessionId { get; set; }
        public long Time { get; set; }
        public string Token { get; set; }
    }
}