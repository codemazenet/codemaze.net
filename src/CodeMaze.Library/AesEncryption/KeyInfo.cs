using System;
using System.Security.Cryptography;

namespace CodeMaze.Library
{
    public class KeyInfo
    {
        public byte[] Key { get; }
        public byte[] Iv { get; }

        public string KeyString => Convert.ToBase64String(Key);
        public string IVString => Convert.ToBase64String(Iv);

        public KeyInfo()
        {
            using (var myAes = Aes.Create())
            {
                if (myAes != null)
                {
                    Key = myAes.Key;
                    Iv = myAes.IV;
                }
            }
        }

        public KeyInfo(EncryptionInfo encryption)
        {
            Key = Convert.FromBase64String(encryption.Key);
            Iv = Convert.FromBase64String(encryption.IV);
        }

        public KeyInfo(byte[] key, byte[] iv)
        {
            Key = key;
            Iv = iv;
        }

        public bool HasValues()
        {
            return !string.IsNullOrWhiteSpace(KeyString) && !string.IsNullOrWhiteSpace(IVString);
        }
    }
}