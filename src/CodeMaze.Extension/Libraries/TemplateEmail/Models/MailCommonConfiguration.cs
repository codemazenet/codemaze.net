using System.Xml.Serialization;

namespace CodeMaze.Extension.TemplateEmail.Models
{
    /// <summary>
    /// Represents the common configuration node
    /// </summary>
    public class MailCommonConfiguration
    {
        [XmlAttribute]
        public bool OverrideToAddress { get; set; }

        [XmlAttribute]
        public string ToAddress { get; set; }
    }
}