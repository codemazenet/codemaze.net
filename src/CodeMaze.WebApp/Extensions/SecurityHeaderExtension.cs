using Microsoft.AspNetCore.Builder;

namespace CodeMaze.WebApp.Extensions
{
    public static class SecurityHeaderExtension
    {
        public static void AddSecurityHeader(this IApplicationBuilder app, bool enforceHttps)
        {
            app.UseSecurityHeaders(new HeaderPolicyCollection()
                .AddFrameOptionsSameOrigin()
                .AddXssProtectionEnabled()
                .AddContentTypeOptionsNoSniff()
                .AddContentSecurityPolicy(csp =>
                {
                    if (enforceHttps)
                    {
                        csp.AddUpgradeInsecureRequests();
                    }
                    csp.AddFormAction()
                        .Self();
                    csp.AddScriptSrc()
                        .Self()
                        .UnsafeInline()
                        .UnsafeEval();
                    //    // Whitelist Azure Application Insights
                    //    .From("https://*.vo.msecnd.net")
                        //.From(urlWhite);
                })
                // Microsoft believes privacy is a fundamental human right
                // So should I
                .AddFeaturePolicy(builder =>
                {
                    builder.AddCamera().All();
                    builder.AddMicrophone().All();
                    builder.AddPayment().None();
                    builder.AddUsb().All();
                    builder.AddFullscreen().None();
                })
                .RemoveServerHeader()
                .RemoveCustomHeader("x-html-minification-powered-by")
                .RemoveCustomHeader("x-powered-by-plesk")

            );
        }
    }
}