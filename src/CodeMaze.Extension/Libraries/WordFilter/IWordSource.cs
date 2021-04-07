namespace CodeMaze.Extension.WordFilter
{
    public interface IWordSource
    {
        char SplitChar { get; }

        string[] GetWordsArray();
    }
}