namespace CodeMaze.ViewModels
{
    public class DatabaseInfo
    {
        public string DB_SERVERNAME { private get; set; }
        public string DB_USERNAME { private get; set; }
        public string DB_PASSWORD { private get; set; }
        public string DB_NAME { private get; set; }
        public int DB_TIMEOUT { private get; set; }

        public string ConnectionString =>
         $"user id={DB_USERNAME};password={DB_PASSWORD};server={DB_SERVERNAME};connection timeout={DB_TIMEOUT};database={DB_NAME}";
    }
}