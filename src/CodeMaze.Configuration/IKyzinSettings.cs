using Newtonsoft.Json;

namespace CodeMaze.Configuration
{
    public interface IKyzinSettings
    {
        string GetJson(Formatting formatting = Formatting.None);
    }
}