using Newtonsoft.Json;

namespace CodeMaze.Configuration
{
    public interface IAppSettings
    {
        string GetJson(Formatting formatting = Formatting.None);
    }
}