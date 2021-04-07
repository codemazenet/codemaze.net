using Microsoft.AspNetCore.Builder;

namespace CodeMaze.WebApp.Extensions
{
    public static class TextExtension
    {
        public static void SupportVietnameseContent(this IApplicationBuilder app)
        {
            System.Text.Encoding.RegisterProvider(System.Text.CodePagesEncodingProvider.Instance);
        }
    }
}