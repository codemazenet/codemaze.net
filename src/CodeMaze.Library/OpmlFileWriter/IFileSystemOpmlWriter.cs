using System.Threading.Tasks;

namespace CodeMaze.Library
{
    public interface IFileSystemOpmlWriter
    {
        Task WriteOpmlFileAsync(string opmlFilePath, OpmlInfo opmlInfo);
    }
}