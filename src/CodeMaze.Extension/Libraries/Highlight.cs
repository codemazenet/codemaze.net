using HtmlAgilityPack;
using System.Linq;

namespace CodeMaze.Extension.Libraries
{
    public static class Highlight
    {
        public static string ApplyHighlightCode(this string htmlString)
        {
            HtmlDocument document = new HtmlDocument();
            document.LoadHtml(htmlString);
            document.DocumentNode.Descendants("img")
                                .Where(e =>
                                {
                                    string src = e.GetAttributeValue("src", null) ?? "";
                                    return !string.IsNullOrEmpty(src);
                                })
                                .ToList()
                                .ForEach(x =>
                                {
                                    string currentSrcValue = x.GetAttributeValue("src", null);

                                    x.SetAttributeValue("src", "");
                                    x.SetAttributeValue("data-src", currentSrcValue);
                                });

            string result = document.DocumentNode.OuterHtml;

            return result;
        }
    }
}