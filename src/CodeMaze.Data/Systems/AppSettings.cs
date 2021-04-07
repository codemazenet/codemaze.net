namespace CodeMaze.Data.Systems
{
    public class AppSettings
    {
        //public CaptchaSettings CaptchaSettings { get; set; }
        public bool EnableImageLazyLoad { get; set; }

        public bool EnablePingBackReceive { get; set; }
        public int TimeZone { get; set; }
        public int PostSummaryWords { get; set; }
        public bool EnablePingBackSend { get; set; }
        public int ImageCacheSlidingExpirationMinutes { get; set; }
        public bool DisableEmailSendingInDevelopment { get; set; }
        public string DNSPrefetchEndpoint { get; set; }
        public int SessionTimeOut { get; set; }
        public int CookiesTimeOut { get; set; }
        public string PoweredBy { get; set; }
        public string AuthorBy { get; set; }
    }
}