using Newtonsoft.Json;

namespace CodeMaze.Configuration
{
    public class KyzinSettings : IAppSettings
    {
        public string GetJson(Formatting formatting = Formatting.None)
        {
            return JsonConvert.SerializeObject(this, formatting);
        }
    }
}