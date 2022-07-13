---
layout: post
title: "Gone on too long P-8 Missing or Insufficient Session Expiration"
subtitle: "You pray for rain, you gotta deal with the mud too. That's a part of it. - Denzel Washington"
comments: true
date: 2022-07-12 11:00:00
author: Mark Roxberry
excerpt: "From OWASP on P-8: Failure to effectively enforce session termination. May result in collection of additional user-data without the user’s consent or awareness."
tags: [owasp, privacy]
categories:
  - security 
postimage:
  src: "post.png"
  alt: "Build it right"
featured: true

---

## P-8 Missing or Insufficient Session Expiration

The [OWASP Top 10 Privacy Risks Project](https://owasp.org/www-project-top-10-privacy-risks/) identifies the top 10 privacy risks in web applications, the cloud and the global online ecosystem.  In September of 2021, version 2 of the project was released. I'm going to work through the list and discuss each risk, with references and mitigation countermeasures, if they exist.

What is Session? [From MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Session)

Poorly enforced session termination is a significant privacy risk.  Sessions may be reused for authorization to access user data without the user's consent or awareness.

This risk can be mitigated by configuring shorter session expiration periods, implementing a logout function and avoiding "infinite" session timeouts.

### References

1. [OWASP Top 10 Privacy Risks Project](https://owasp.org/www-project-top-10-privacy-risks/)
2. [OWASP Session Timeout](https://owasp.org/www-community/Session_Timeout)
3. [CWE-613: Insufficient Session Expiration](https://cwe.mitre.org/data/definitions/613.html)

### Image Credit

Photo by <a href="https://unsplash.com/@zmachacek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Zdeněk Macháček</a> on <a href="https://unsplash.com/s/photos/pile?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

### Quote Credit

Denzel Washington Quotes. (n.d.). BrainyQuote.com. Retrieved July 12, 2022, from [BrainyQuote.com Web](https://www.brainyquote.com/quotes/denzel_washington_337069)
