using System.Threading.Tasks;

namespace CodeMaze.Extension.OpmlFileWriter
{
    public interface IFileSystemOpmlWriter
    {
        Task WriteOpmlFileAsync(string opmlFilePath, OpmlInfo opmlInfo);
    }
}