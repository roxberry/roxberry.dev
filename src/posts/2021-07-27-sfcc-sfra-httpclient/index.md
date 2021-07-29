---
layout: post
title: Dev Note - HttpClient in SFRA (Salesforce)
subtitle: SFRA HttpClient Code
comments: true
date: 2021-07-27 01:00:00
author: Mark Roxberry
excerpt: Posting code I used for a HttpClient call in Salesforce Commerce Cloud SFRA
tags: [development, sfra, salesforce]
categories:
  - development
  - salesforce
  - sfcc
  - sfra
postimage:
  src: "post.png"
  alt: "main post image"
featured: true

---
## Using HttpClient in Salesforce Commerce Cloud
I needed a quick way to get a model for a view.  For our API calls, I created services, profiles and credentials that are managed by SFCC.  But that's overkill for a one off call.  HttpClient is a way to make external calls, in SFCC/SFRA there's a little twist.  Code to use the TypeScript HTTPClient in cartridge code:

```javascript {numberLines}
function callExternalUrl(parameters) {
    var HTTPClient = require('dw/net/HTTPClient');
    var Logger = require('dw/system/Logger');

    if (!empty(parameters)) {
        var url = parameters.url;
        var userId = parameters.userId;
        var password = parameters.password;

        var httpClient = new HTTPClient();
        httpClient.setTimeout(2000);
        httpClient.open("GET", url, userId, password);
        httpClient.send();

        if (httpClient.statusCode == 200) {
            //confirm response
            Logger.getLogger("shop").info(
                httpClient.text
            );

            // do something with response object
            // var sourceObject = JSON.parse(httpClient.text);

            }
        } else {
            // error handling
            Logger.getLogger("shop").error(
                "An error occured with status code " + 
                httpClient.statusCode
            );
        }
    }

// ...
// var parameters = {
//     url: "",
//     userId: "",
//     password: ""
// }
// callExternalUrl(parameters)
```