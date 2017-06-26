using Constellation;
using Constellation.Package;
//
// API.AI .NET SDK tests - client-side tests for API.AI
// =================================================
//
// Copyright (C) 2015 by Speaktoit, Inc. (https://www.speaktoit.com)
// https://www.api.ai
//
// ***********************************************************************************************************************
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
// the License. You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
// an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
// specific language governing permissions and limitations under the License.
//
// ***********************************************************************************************************************

using System;
using System.IO;
using NUnit.Framework;
using ApiAiSDK.Model;
using System.Reflection;

namespace ApiAiSDK.Tests
{
    [TestFixture]
    public class Program : PackageBase 
    {


        
        static void Main(string[] args)
        {
            PackageHost.Start<Program>(args);
            
        }

        // MC using API.ai to answer //

        [MessageCallback]

        ApiAiSDK.Model.AIResponse ReturnResponse(string Ask)
        {

            //string ACCESS_TOKEN = PackageHost.GetSettingValue<String>("APIAccessToken");
            string ACCESS_TOKEN = "e552149f515940da96f8d0858f28c806";
            var config = new AIConfiguration(ACCESS_TOKEN, SupportedLanguage.French);

            var apiAi = new ApiAi(config);

            var response = apiAi.TextRequest(Ask);
           
            Assert.IsNotNull(response);
            PackageHost.WriteInfo(response.Result.Fulfillment.Speech);
            //envoie dans constellation ma réponse

            return response;
        }

    }
}
