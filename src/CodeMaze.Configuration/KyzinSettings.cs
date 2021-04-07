using Newtonsoft.Json;

namespace CodeMaze.Configuration
{
    public class KyzinSettings : IKyzinSettings
    {
        public string GetJson(Formatting formatting = Formatting.None)
        {
            return JsonConvert.SerializeObject(this, formatting);
        }
    }
}