using System;
using System.Text;

namespace CodeMaze.Cryptography
{
    public static class Base64Encryptor
    {
        public static string Base64StringEncode(this string plainText)
        {
            var bytes = Encoding.UTF8.GetBytes(plainText);

            var encodedText = Convert.ToBase64String(bytes);

            return encodedText;
        }

        public static string Base64StringDecode(this string encodedText)
        {
            var bytes = Convert.FromBase64String(encodedText);

            var plainText = Encoding.UTF8.GetString(bytes);

            return plainText;
        }
    }
}