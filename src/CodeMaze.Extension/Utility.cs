﻿using Markdig;
using CodeMaze.Configuration;
using CodeMaze.Data.RequestResponse;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;

namespace CodeMaze.Extension
{
    public static class Utility
    {
        public static string AppVersion =>
               Assembly.GetEntryAssembly().GetCustomAttribute<AssemblyInformationalVersionAttribute>().InformationalVersion;

        public static string GetBaseUrl(string url = "", bool appendVersion = false)
        {
            var baseUrl = CodeMazeConfiguration.BaseUrl;

            if (string.IsNullOrEmpty(url))
            {
            }

            if (!appendVersion)
                return CombineUrl(baseUrl, url);

            return CombineUrl(baseUrl, url) + $"?v={Guid.NewGuid()}";
        }

        public static string GetMonthNameByNumber(int number)
        {
            if (number > 12 || number < 1)
            {
                return string.Empty;
            }

            return CultureInfo.GetCultureInfo("en-US").DateTimeFormat.GetMonthName(number);
        }

        public static string RemoveWhiteSpaceFromStylesheets(string body)
        {
            body = Regex.Replace(body, @"[a-zA-Z]+#", "#");
            body = Regex.Replace(body, @"[\n\r]+\s*", string.Empty);
            body = Regex.Replace(body, @"\s+", " ");
            body = Regex.Replace(body, @"\s?([:,;{}])\s?", "$1");
            body = body.Replace(";}", "}");
            body = Regex.Replace(body, @"([\s:]0)(px|pt|%|em)", "$1");
            // Remove comments from CSS
            body = Regex.Replace(body, @"/\*[\d\D]*?\*/", string.Empty);
            return body;
        }

        public static string ResolveImageStoragePath(string contentRootPath, string path)
        {
            if (string.IsNullOrWhiteSpace(path))
            {
                throw new ArgumentNullException(nameof(path));
            }

            var basedirStr = "${basedir}"; // Do not use "." because there could be "." in path.
            if (path.IndexOf(basedirStr, StringComparison.Ordinal) > 0)
            {
                throw new NotSupportedException($"{basedirStr} can only be at the beginning.");
            }
            if (path.IndexOf(basedirStr, StringComparison.Ordinal) == 0)
            {
                // Use relative path
                // Warning: Write data under application directory may blow up on Azure App Services when WEBSITE_RUN_FROM_PACKAGE = 1, which set the directory read-only.
                path = path.Replace(basedirStr, contentRootPath);
            }

            // IsPathFullyQualified can't check if path is valid, e.g.:
            // Path: C:\Documents<>|foo
            //   Rooted: True
            //   Fully qualified: True
            //   Full path: C:\Documents<>|foo
            var invalidChars = Path.GetInvalidPathChars();
            if (path.IndexOfAny(invalidChars) >= 0)
            {
                throw new InvalidOperationException("Path can not contain invalid chars.");
            }
            if (!Path.IsPathFullyQualified(path))
            {
                throw new InvalidOperationException("Path is not fully qualified.");
            }

            var fullPath = Path.GetFullPath(path);
            if (!Directory.Exists(fullPath))
            {
                Directory.CreateDirectory(fullPath);
            }
            return fullPath;
        }

        public enum UrlScheme
        {
            Http,
            Https,
            All
        }

        public static bool IsValidUrl(this string url, UrlScheme urlScheme = UrlScheme.All)
        {
            bool isValidUrl = Uri.TryCreate(url, UriKind.Absolute, out var uriResult);
            if (!isValidUrl)
            {
                return false;
            }

            switch (urlScheme)
            {
                case UrlScheme.All:
                    isValidUrl &= uriResult.Scheme == Uri.UriSchemeHttps || uriResult.Scheme == Uri.UriSchemeHttp;
                    break;

                case UrlScheme.Https:
                    isValidUrl &= uriResult.Scheme == Uri.UriSchemeHttps;
                    break;

                case UrlScheme.Http:
                    isValidUrl &= uriResult.Scheme == Uri.UriSchemeHttp;
                    break;
            }

            return isValidUrl;
        }

        public static string CombineUrl(string url, string path)
        {
            if (string.IsNullOrWhiteSpace(url) || string.IsNullOrWhiteSpace(path))
            {
                throw new ArgumentNullException();
            }

            url = url.Trim();
            path = path.Trim();

            return url.TrimEnd('/') + "/" + path.TrimStart('/');
        }

        public static DateTime UtcToZoneTime(DateTime utcTime, int timeZone = 0)
        {
            if (utcTime != null)
                return utcTime.AddHours(timeZone);

            return DateTime.UtcNow.AddHours(timeZone);
        }

        public static string GetPostAbstract(string rawHtmlContent, int wordCount = -1, bool htmlDecode = true)
        {
            if (htmlDecode)
                rawHtmlContent = HttpUtility.HtmlDecode(rawHtmlContent);

            var htmlContent = RemoveTags(rawHtmlContent);

            var stripHtml = StringHelper.StripHTML(htmlContent);

            var plainText = StringHelper.RemoveSpecialCharacters(stripHtml);

            if (wordCount == -1) return plainText;

            var result = plainText.Ellipsize(wordCount);

            return result;
        }

        public static string Ellipsize(this string text, int characterCount)
        {
            return text.Ellipsize(characterCount, "\u00A0\u2026");
        }

        public static string Ellipsize(this string text, int characterCount, string ellipsis, bool wordBoundary = false)
        {
            if (string.IsNullOrWhiteSpace(text))
                return "";

            if (characterCount < 0 || text.Length <= characterCount)
                return text;

            // search beginning of word
            var backup = characterCount;
            while (characterCount > 0 && !text[characterCount - 1].IsLetter())
            {
                characterCount--;
            }

            // search previous word
            while (characterCount > 0 && text[characterCount - 1].IsSpace())
            {
                characterCount--;
            }

            // search special of word
            while (characterCount > 0 && text[characterCount - 1].IsSpecial())
            {
                characterCount--;
            }

            // if it was the last word, recover it, unless boundary is requested
            if (characterCount == 0 && !wordBoundary)
            {
                characterCount = backup;
            }

            var trimmed = text.Substring(0, characterCount);
            return trimmed + ellipsis;
        }

        public static bool IsLetter(this char c)
        {
            return ('A' <= c && c <= 'Z') || ('a' <= c && c <= 'z');
        }

        public static bool IsSpace(this char c)
        {
            return (c == '\r' || c == '\n' || c == '\t' || c == '\f' || c == ' ');
        }

        public static bool IsSpecial(this char c)
        {
            return !Char.IsLetterOrDigit(c);
        }

        public static string Left(string sSource, int iLength)
        {
            return sSource.Substring(0, iLength > sSource.Length ? sSource.Length : iLength);
        }

        public static string Right(string sSource, int iLength)
        {
            return sSource.Substring(iLength > sSource.Length ? 0 : sSource.Length - iLength);
        }

        public static string RemoveTags(string html, bool htmlDecode = false)
        {
            if (string.IsNullOrEmpty(html))
            {
                return string.Empty;
            }

            var result = new char[html.Length];

            var cursor = 0;
            var inside = false;
            foreach (var current in html)
            {
                switch (current)
                {
                    case '<':
                        inside = true;
                        continue;
                    case '>':
                        inside = false;
                        continue;
                }

                if (!inside)
                {
                    result[cursor++] = current;
                }
            }

            var stringResult = new string(result, 0, cursor);

            if (htmlDecode)
            {
                stringResult = HttpUtility.HtmlDecode(stringResult);
            }

            return stringResult;
        }

        public static bool TryParseBase64(string input, out byte[] base64Array)
        {
            base64Array = null;

            if (string.IsNullOrWhiteSpace(input) ||
                input.Length % 4 != 0 ||
                !Regex.IsMatch(input, @"^[a-zA-Z0-9\+/]*={0,3}$", RegexOptions.None))
            {
                return false;
            }

            try
            {
                base64Array = Convert.FromBase64String(input);
                return true;
            }
            catch (FormatException)
            {
                return false;
            }
        }

        private static readonly Tuple<string, string>[] TagNormalizeSourceTable =
        {
            Tuple.Create(".", "dot"),
            Tuple.Create("#", "sharp"),
            Tuple.Create("<", "lt"),
            Tuple.Create(">", "gt"),
            Tuple.Create("@", "at"),
            Tuple.Create("$", "dollar"),
            Tuple.Create("*", "asterisk"),
            Tuple.Create("(", "lbrackets"),
            Tuple.Create(")", "rbrackets"),
            Tuple.Create("{", "lbraces"),
            Tuple.Create("}", "rbraces"),
            Tuple.Create(" ", "-"),
            Tuple.Create("+", "-and-"),
            Tuple.Create("=", "-equals-")
        };

        public static string NormalizeTagName(string orgTagName)
        {
            return ReplaceWithStringBuilder(orgTagName, TagNormalizeSourceTable).ToLower();
        }

        private static string ReplaceWithStringBuilder(string value, IEnumerable<Tuple<string, string>> toReplace)
        {
            var result = new StringBuilder(value);
            foreach (var (item1, item2) in toReplace)
            {
                result.Replace(item1, item2);
            }
            return result.ToString();
        }

        public static string ReplaceImgSrc(string rawHtmlContent)
        {
            // Replace ONLY IMG tag's src to data-src
            // Otherwise embedded videos will blow up
            if (string.IsNullOrWhiteSpace(rawHtmlContent)) return rawHtmlContent;
            var imgSrcRegex = new Regex("<img.+?(src)=[\"'](.+?)[\"'].+?>");
            var newStr = imgSrcRegex.Replace(rawHtmlContent, match => match.Value.Replace("src", "data-src"));
            return newStr;
        }

        public static string MdContentToHtml(string markdown)
        {
            var pipeline = new MarkdownPipelineBuilder().DisableHtml().Build();
            var result = Markdown.ToHtml(markdown, pipeline);
            return result;
        }

        public static Response<(string Slug, DateTime PubDate)> GetSlugInfoFromPostUrl(string url)
        {
            var blogSlugRegex = new Regex(@"^https?:\/\/.*\/post\/(?<yyyy>\d{4})\/(?<MM>\d{1,12})\/(?<dd>\d{1,31})\/(?<slug>.*)$");
            var match = blogSlugRegex.Match(url);
            if (!match.Success)
            {
                return new FailedResponse<(string Slug, DateTime date)>("Invalid Slug Format");
            }

            var year = int.Parse(match.Groups["yyyy"].Value);
            var month = int.Parse(match.Groups["MM"].Value);
            var day = int.Parse(match.Groups["dd"].Value);
            var slug = match.Groups["slug"].Value;
            var date = new DateTime(year, month, day);

            return new SuccessResponse<(string Slug, DateTime date)>((slug, date));
        }

        public static string FormatDate(DateTime input, string format = "")
        {
            if (input == null)
            {
                input = DateTime.Now;
            }

            if (string.IsNullOrEmpty(format))
                format = CodeMazeConfiguration.DateTimeFormat;

            return input.ToString(format);
        }
    }
}