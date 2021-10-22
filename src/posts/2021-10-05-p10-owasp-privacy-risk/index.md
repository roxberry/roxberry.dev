---
layout: post
title: Why do we need all of this data? OWASP Privacy Risks - P-10
subtitle: Do not trust your memory; it is a net full of holes; the most beautiful prizes slip through it. - Georges Duhamel
comments: true
date: 2021-10-20 01:00:00
author: Mark Roxberry
excerpt: P-10 Collection of data not required for the user-consented purpose and the "Lean Data Commitment".
tags: [owasp, privacy]
categories:
  - security
postimage:
  src: "post.jpg"
  alt: "Trawler with illegal catch"
featured: true

---
## P-10 Collection of data not required for the user-consented purpose

The [OWASP Top 10 Privacy Risks Project](https://owasp.org/www-project-top-10-privacy-risks/) identifies the top 10 privacy risks in web applications, the cloud and the global online ecosystem.  In September of 2021, version 2 of the project was released. I'm going to work through the list and discuss each risk, with references and mitigation countermeasures, if they exist.

The P-10 risk, "Collection of data not required for the user-consented purpose" on the list is the collection of too much data from users.

## Companies are collecting more data than they need

“Most companies are collecting data these days on all the interactions, on all the places that they touch customers in the normal course of doing business,” says Elea Feit, senior fellow at Wharton Customer Analytics and a Drexel marketing professor. (from [Your Data Is Shared and Sold…What’s Being Done About It?](https://knowledge.wharton.upenn.edu/article/data-shared-sold-whats-done/) - Knowledge@Wharton)

From Security.org, a review of privacy policies reveals that they have granted themselves liberal access to user data.  From [The Data Big Tech Companies Have On You](https://www.security.org/resources/data-tech-companies-have/).  Reviewing companies and their grades from that article:

* Google gets an F

  In addition to data they collect from user interactions, their policy allows for data collection  on users from local newspapers, third party marketing partners, or advertisers.

* Facebook's Grade: C
    
  By design, Facebook operates off of user data.  But how do they make money?  "Facebook makes the majority of its money through its advertisers"

* Amazon Grade: B-
  
  Amazon collects a ton of data from users and shares data with millions of Marketplace sellers, it does not by default send PII to those sellers.  Additionally, Amazon provides opt-out for any information sent to 3rd parties.

## What to do to mitigate P-10

I recommend that you look into making a "Lean Data Commitment", following Mozilla's "Lean Data Practices" guide to help define your organization's privacy best practices.  "Lean Data Practices" can be found [here](https://www.mozilla.org/en-US/about/policy/lean-data/).  Particulary note the 3 tenets of lean data practices:
- "Stay Lean" - review your data collection
- "Build Security" - protect customer data
- "Engage Your Users" - inform your users, keep your practices transparent. 

Scan your site for Privacy issues at [PRIVACYSCORE](https://privacyscore.org/)


### References

1. [OWASP Top 10 Privacy Risks Project](https://owasp.org/www-project-top-10-privacy-risks/)
1. [Your Data Is Shared and Sold…What’s Being Done About It?](https://knowledge.wharton.upenn.edu/article/data-shared-sold-whats-done/) - Knowledge@Wharton
1. [The Data Big Tech Companies Have On You](https://www.security.org/resources/data-tech-companies-have/) - Security.org
1. [Your mass consumer data collection is destroying consumer trust](https://techcrunch.com/2019/10/10/your-mass-consumer-data-collection-is-destroying-consumer-trust/) - Tech Crunch
1. [The Rising Concern Around Consumer Data And Privacy](https://www.forbes.com/sites/forbestechcouncil/2020/12/14/the-rising-concern-around-consumer-data-and-privacy/?sh=7658a1c487e8) - Forbes

### Quote credit

[BrainyQuote](https://www.brainyquote.com/quotes/georges_duhamel_101609)