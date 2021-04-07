namespace CodeMaze.Configuration
{
    public class BlogOwnerSettings : KyzinSettings
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public string ShortDescription { get; set; }

        public string AvatarBase64 { get; set; }

        public BlogOwnerSettings()
        {
            AvatarBase64 = string.Empty;
        }
    }
}