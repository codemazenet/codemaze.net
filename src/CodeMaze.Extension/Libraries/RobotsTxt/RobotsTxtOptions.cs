using System;
using System.Collections.Generic;
using System.Text;

namespace CodeMaze.Extension.RobotsTxt
{
    // From https://github.com/karl-sjogren/robots-txt-middleware
    public class RobotsTxtOptions
    {
        public RobotsTxtOptions()
        {
            Sections = new List<RobotsTxtSection>();
            SitemapUrls = new List<string>();
        }

        public List<RobotsTxtSection> Sections { get; set; }

        public List<string> SitemapUrls { get; set; }

        public TimeSpan MaxAge { get; } = TimeSpan.FromDays(1);

        public StringBuilder Build()
        {
            var builder = new StringBuilder();

            foreach (var section in Sections)
            {
                section.Build(builder);
                builder.AppendLine();
            }

            foreach (var url in SitemapUrls)
            {
                builder.AppendLine("Sitemap: " + url);
            }

            return builder;
        }
    }

    public class Rule
    {
        public string Key { get; set; }
        public string Value { get; set; }
    }

    public class RobotsTxtSection
    {
        public string Comment { get; set; }
        public string UserAgent { get; set; }
        public List<Rule> Rules { get; set; }

        public RobotsTxtSection()
        {
            Comment = string.Empty;
            UserAgent = string.Empty;
            Rules = new List<Rule>();
        }

        public void Build(StringBuilder builder)
        {
            if (string.IsNullOrEmpty(UserAgent))
                return;

            builder.AppendLine("# " + Comment);
            builder.AppendLine("User-agent: " + UserAgent);

            foreach (var rule in Rules)
            {
                builder.AppendLine($"{rule.Key}: {rule.Value}");
            }
        }
    }
}