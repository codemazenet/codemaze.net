using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

namespace CodeMaze.Extension.Pingback
{
    public interface IPingbackSender
    {
        ILogger<PingbackSender> Logger { get; set; }

        Task TrySendPingAsync(string postUrl, string postContent);
    }
}