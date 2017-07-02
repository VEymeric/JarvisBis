using ApiAiSDK;
using Constellation.Package;
using System;

namespace ApiAI
{

    /// <seealso cref="Constellation.Package.PackageBase" />
    public class Program : PackageBase
    {
        /// <summary>
        /// Mains the specified arguments.
        static void Main(string[] args)
        {
            PackageHost.Start<Program>(args);

        }
        /// <summary>
        /// send your request.
        /// </summary>
        /// <param name="text">your request</param>
        /// <returns></returns>
        [MessageCallback]
        ApiAiSDK.Model.AIResponse TextRequest(string text)
        {
            string access_token = PackageHost.GetSettingValue<String>("Client access token");
            var config = new AIConfiguration(access_token,SupportedLanguage.FromLanguageTag(PackageHost.GetSettingValue<String>("language")));

            var apiAi = new ApiAi(config);
            var response = apiAi.TextRequest(text);
            PackageHost.WriteInfo(response.Result.Fulfillment.Speech);

            return response;
        }
    }
}
