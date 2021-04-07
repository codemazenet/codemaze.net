using Microsoft.AspNetCore.Http;
using SkiaSharp;
using System;
using System.IO;

namespace CodeMaze.Extension
{
    public static class FileUploadExtension
    {
        public static async System.Threading.Tasks.Task<string> UploadFileAsync(this IFormFile file)
        {
            if (file == null || file.Length == 0)
                return "file not selected";

            var fileName = file.FileName.GetFileName();

            var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot\\public", fileName);
            using (var stream = new FileStream(path, FileMode.Create))
            {
                await file.CopyToAsync(stream);

                return $"/public/{fileName}";
            }
        }

        private static string GetFileName(this string fileName)
        {
            if (string.IsNullOrEmpty(fileName)) return string.Empty;

            return $"{NK.Extension.PasswordHasher.SHA1Hash(Guid.NewGuid().ToString())}-{Guid.NewGuid().ToString()}.{fileName.GetExtentionFile()}";
        }

        private static string GetExtentionFile(this string fileName)
        {
            if (string.IsNullOrEmpty(fileName)) return string.Empty;

            return fileName.Substring(fileName.LastIndexOf('.') + 1).ToLower();
        }

        public static string UploadFileSkiaSharp(this IFormFile file, int size = 150, int quality = 75)
        {
            using (var input = file.OpenReadStream())
            {
                using (var inputStream = new SKManagedStream(input))
                {
                    using (var original = SKBitmap.Decode(inputStream))
                    {
                        int width, height;
                        if (original.Width > original.Height)
                        {
                            width = size;
                            height = original.Height * size / original.Width;
                        }
                        else
                        {
                            width = original.Width * size / original.Height;
                            height = size;
                        }

                        using (var resized = original.Resize(new SKImageInfo(width, height), SKFilterQuality.High))
                        {
                            if (resized == null) return String.Empty;
                            using (var image = SKImage.FromBitmap(resized))
                            {
                                var fileName = file.FileName.GetFileName();
                                var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot\\public", fileName);
                                using (var output = File.OpenWrite(path))
                                {
                                    image.Encode(GetEncodedImageFormat(fileName), quality).SaveTo(output);

                                    return $"/public/{fileName}";
                                }
                            }
                        }
                    }
                }
            }
        }

        private static SKEncodedImageFormat GetEncodedImageFormat(string fileName)
        {
            if (string.IsNullOrEmpty(fileName)) return SKEncodedImageFormat.Jpeg;
            var extentionFile = fileName.GetExtentionFile();
            var fixedExtensionName = char.ToUpper(extentionFile[0]) + extentionFile.Substring(1);
            SKEncodedImageFormat value = SKEncodedImageFormat.Jpeg;
            SKEncodedImageFormat.TryParse(fixedExtensionName, out value);
            return value;
        }
    }
}