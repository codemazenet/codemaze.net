namespace CodeMaze.Cryptography.Symmetric
{
    public interface IAesEncryptor
    {
        string Encrypt(string plainText);
        string Decrypt(string encryptedText);
    }
}
