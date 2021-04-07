using Microsoft.Extensions.DependencyInjection;
using System.Collections.Generic;
using System.IO.Compression;
using WebMarkupMin.AspNet.Common.Compressors;
using WebMarkupMin.AspNet.Common.UrlMatchers;
using WebMarkupMin.AspNetCore3;
using WebMarkupMin.Core;

namespace CodeMaze.Extension
{
    public static class WebMarkupMinConfiguration
    {
        public static void AddWebMarkupMinConfigure(this IServiceCollection services)
        {
            services.AddWebMarkupMin(
                    options =>
                    {
                        options.AllowMinificationInDevelopmentEnvironment = true;
                        options.AllowCompressionInDevelopmentEnvironment = true;
                    })
                .AddHtmlMinification(
                    options =>
                    {
                        options.MinificationSettings.RemoveRedundantAttributes = false;
                        options.MinificationSettings.RemoveHttpProtocolFromAttributes = false;
                        options.MinificationSettings.RemoveHttpsProtocolFromAttributes = false;
                    })
                .AddXhtmlMinification(options =>
                {
                    options.IncludedPages = new List<IUrlMatcher>
                    {
                        new WildcardUrlMatcher("/minifiers/x*ml-minifier"),
                        new ExactUrlMatcher("/rss")
                    };

                    XhtmlMinificationSettings settings = options.MinificationSettings;
                    settings.RemoveRedundantAttributes = true;
                    settings.RemoveHttpProtocolFromAttributes = true;
                    settings.RemoveHttpsProtocolFromAttributes = true;
                })
                .AddXmlMinification(options =>
                {
                    XmlMinificationSettings settings = options.MinificationSettings;
                    settings.CollapseTagsWithoutContent = true;
                })
                .AddHttpCompression(options =>
                {
                    options.CompressorFactories = new List<ICompressorFactory>
                    {
                        new DeflateCompressorFactory(new DeflateCompressionSettings
                        {
                            Level = CompressionLevel.Fastest
                        }),
                        new GZipCompressorFactory(new GZipCompressionSettings
                        {
                            Level = CompressionLevel.Fastest
                        })
                    };
                });
        }
    }
}