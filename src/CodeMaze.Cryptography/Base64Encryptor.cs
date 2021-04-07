using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeMaze.Cryptography
{
    public static class Base64Encryptor
    {
        private static readonly string cipherKey = "NnA3KbV0r0";

        public static string Base64StringEncode(this string plainText)
        {
            var bytes = Encoding.UTF8.GetBytes($"{plainText}.{cipherKey}");

            var encodedText = Convert.ToBase64String(bytes);

            return encodedText;
        }
        public static string Base64StringDecode(this string encodedText)
        {
            var bytes = Convert.FromBase64String(encodedText);

            var decodedString = Encoding.UTF8.GetString(bytes);

            var plainText = decodedString.Substring(0, decodedString.IndexOf($".{cipherKey}"));

            return plainText;
        }
    }
}
