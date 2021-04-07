using CodeMaze.Data.RequestResponse;
using System.Threading.Tasks;

namespace CodeMaze.Configuration
{
    public interface IBlogConfig
    {
        BlogOwnerSettings BlogOwnerSettings { get; set; }
        GeneralSettings GeneralSettings { get; set; }
        ContentSettings ContentSettings { get; set; }
        EmailSettings EmailSettings { get; set; }
        FeedSettings FeedSettings { get; set; }
        WatermarkSettings WatermarkSettings { get; set; }

        Task<Response> SaveConfigurationAsync<T>(T kaizinSettings) where T : IKyzinSettings;
    }
}