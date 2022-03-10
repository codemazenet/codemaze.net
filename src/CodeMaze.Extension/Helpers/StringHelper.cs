using CodeMaze.Configuration;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace CodeMaze.Extension
{
    public static class StringHelper
    {
        public static string ConvertUTF8toASCII(this string text)
        {
            if (string.IsNullOrEmpty(text)) return text;

            Regex regex = new Regex("\\p{IsCombiningDiacriticalMarks}+");
            string temp = text.Normalize(NormalizationForm.FormD);
            text = regex.Replace(temp, String.Empty).Replace('\u0111', 'd').Replace('\u0110', 'D');

            return text;
        }

        public static string ConvertToUrl(this string text)
        {
            if (string.IsNullOrEmpty(text)) return text;

            text = text.RemoveMultipleWhiteSpaces();

            text = text.ReplaceSpecialWord();

            text = text.ConvertUTF8toASCII().Replace(" ", "___");

            text = Regex.Replace(text, @"[^\w\d]", "___");

            var urlArray = text.Replace("___", "-").ToLower().ToCharArray();

            StringBuilder url = new StringBuilder();
            bool isSeparator = false;
            foreach (var item in urlArray)
            {
                if (item == '-' && isSeparator == false)
                {
                    url.Append(item);
                    isSeparator = true;
                }
                else if (item != '-')
                {
                    url.Append(item);
                    isSeparator = false;
                }
            }

            text = url.ToString();

            if (text.LastIndexOf('-') == text.Length)
            {
                text = text.Substring(0, text.Length - 1);
            }

            return text.ToLower();
        }

        public static string ConvertToCode(this string text)
        {
            return (NK.Extension.KeyGenerator.GetUniqueKey(8));
        }

        public static string[] ConvertToTags(this string tag)
        {
            string[] tagList = string.IsNullOrWhiteSpace(tag)
                    ? new string[] { }
                    : tag.Split(',').Where(x => !string.IsNullOrEmpty(x)).ToArray();

            return tagList;
        }

        public static string GetShortContent(this string mainContent, string shortContent)
        {
            if (!string.IsNullOrWhiteSpace(shortContent))
            {
                return Utility.GetPostAbstract(shortContent);
            }
            else
            {
                return Utility.GetPostAbstract(mainContent, CodeMazeConfiguration.AppSettings.PostSummaryWords, true);
            }
        }

        public static string BreakWord(this string text, int maxLength = 65)
        {
            if (!string.IsNullOrEmpty(text) && text.Length > maxLength)
            {
                text = text.Substring(0, maxLength);
                var lastIndexWhiteSpace = text.LastIndexOf(' ');
                text = text.Substring(0, lastIndexWhiteSpace);
                text += "...";
            }

            return text;
        }

        public static string RemoveMultipleWhiteSpaces(this string text)
        {
            if (string.IsNullOrEmpty(text))
                return string.Empty;

            text = text.Replace("\r\n", string.Empty);

            Regex regex = new Regex(@"\s+", RegexOptions.None);

            return regex.Replace(text.Trim(), " ");
        }

        private static readonly Tuple<string, string>[] SpecialWordTuples =
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

        public static string ReplaceSpecialWord(this string text)
        {
            if (string.IsNullOrEmpty(text)) return text;

            return text.ReplaceWithStringBuilder(SpecialWordTuples);
        }

        private static string ReplaceWithStringBuilder(this string text, IEnumerable<Tuple<string, string>> sourceReplace)
        {
            if (string.IsNullOrEmpty(text)) return text;

            var result = new StringBuilder(text);
            foreach (var (item1, item2) in sourceReplace)
            {
                result.Replace(item1, item2);
            }
            return result.ToString();
        }

        public static string RemoveSpecialCharacters(string text)
        {
            if (string.IsNullOrEmpty(text))
                return string.Empty;

            return Regex.Replace(text, @"[^\d\w(,. )]+", "");
        }

        public static string StripHTML(string text)
        {
            if (string.IsNullOrEmpty(text))
                return string.Empty;

            var stripHtml = Regex.Replace(text, "<.*?>", String.Empty);

            return stripHtml.RemoveMultipleWhiteSpaces();
        }

        public static bool IsValidEmail(this string email)
        {
            try
            {
                var addr = new System.Net.Mail.MailAddress(email);
                return addr.Address == email;
            }
            catch
            {
                return false;
            }
        }

        public static string RandomString(int size)
        {
            var _random = new Random();
            var builder = new StringBuilder(size);

            // Unicode/ASCII Letters are divided into two blocks
            // (Letters 65–90 / 97–122):
            // The first group containing the uppercase letters and
            // the second group containing the lowercase.

            // char is a single Unicode character
            char offset = 'a';//lowerCase ? 'a' : 'A';
            const int lettersOffset = 26; // A...Z or a..z: length=26

            for (var i = 0; i < size; i++)
            {
                var @char = (char)_random.Next(offset, offset + lettersOffset);
                var c = (_random.Next(1, 100) % 2 == 0) ? @char.ToString().ToLower() : @char.ToString().ToUpper();
                builder.Append(c);
            }

            return builder.ToString();
        }
    }
}