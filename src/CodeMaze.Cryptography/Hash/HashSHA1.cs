namespace CodeMaze.Cryptography.Hash
{
    using System.Security.Cryptography;
    using System.Text;

    public class HashSHA1
    {
        public static string Hash(string text)
        {
            using (SHA1Managed sha1 = new SHA1Managed())
            {
                var hash = sha1.ComputeHash(Encoding.UTF8.GetBytes(text));
                var sb = new StringBuilder(hash.Length * 2);

                foreach (byte b in hash)
                {
                    // can be "x2" if want lowercase
                    // can be "X2" if want uppercase
                    sb.Append(b.ToString("x2"));
                }

                return sb.ToString();
            }
        }
    }
}