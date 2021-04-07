﻿namespace CodeMaze.Library
{
    public interface IAesEncryptionService
    {
        KeyInfo KeyInfo { get; set; }

        string Encrypt(string input);

        string Decrypt(string cipherText);
    }
}