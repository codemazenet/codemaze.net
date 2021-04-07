namespace CodeMaze.Configuration
{
    public class WatermarkSettings : KyzinSettings
    {
        public bool IsEnabled { get; set; }
        public bool KeepOriginImage { get; set; }
        public int FontSize { get; set; }
        public string WatermarkText { get; set; }
    }
}