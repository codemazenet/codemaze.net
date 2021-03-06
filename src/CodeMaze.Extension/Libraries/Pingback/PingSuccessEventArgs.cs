using System;

namespace CodeMaze.Extension.Pingback
{
    public class PingSuccessEventArgs : EventArgs
    {
        public string Domain { get; set; }

        public PingRequest PingRequest { get; set; }

        public PingSuccessEventArgs(string domain, PingRequest pingRequest)
        {
            Domain = domain;
            PingRequest = pingRequest;
        }
    }
}