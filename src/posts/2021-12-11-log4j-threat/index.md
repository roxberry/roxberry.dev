---
layout: post
title: "PSA: Log4Shell: Exploiting the Log4J Vulnerability"
comments: true
date: 2021-12-11 10:00:00
author: Mark Roxberry
excerpt: PSA - Vulnerabilities in the Apache Log4J weaponized as Log4Shell.  A list of resources to help understand the threat and mitigate the risk. 
tags: [security, psa]
categories:
  - security
postimage:
  src: "post.jpg"
  alt: "Hacker News banner image"
featured: true

---
## Log4Shell: A Log4J Vulnerability

A major component used in Java, Apache servers, Log4J is vulnerable to parameter substitution - like SQL injection but via a 3rd party lib.  The vulnerability has been labeled 'Log4Shell'.

[The Hacker News](https://thehackernews.com) has a post with a lot of good information [here](https://thehackernews.com/2021/12/apache-log4j-vulnerability-log4shell.html).

### Resources

#### CVE 2021-44228

[CVE Report](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-44228)

#### CISA Official Report

I'm not sure how helpful this is for risk mitigation, but it is at least on the federal radar:

Original release date: December 11, 2021

[STATEMENT FROM CISA DIRECTOR EASTERLY ON "LOG4J" VULNERABILITY](https://www.cisa.gov/news/2021/12/11/statement-cisa-director-easterly-log4j-vulnerability)

1. Enumerate any external facing devices that have log4j installed. 

1. Make sure that your security operations center is actioning every single alert on the devices that fall into the category above. 

1. Install a web application firewall (WAF) with rules that automatically update so that your SOC is able to concentrate on fewer alerts.

#### Apache Log4J

[Apache Log4J Security](https://logging.apache.org/log4j/2.x/security.html)

Descripton: Apache Log4j <=2.14.1 JNDI features used in configuration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers when message lookup substitution is enabled. From log4j 2.15.0, this behavior has been disabled by default.

Mitigation: In releases >=2.10, this behavior can be mitigated by setting either the system property ```java log4j2.formatMsgNoLookups``` or the environment variable ```bash LOG4J_FORMAT_MSG_NO_LOOKUPS``` to true. For releases >=2.7 and <=2.14.1, all ```java PatternLayout``` patterns can be modified to specify the message converter as %m{nolookups} instead of just %m. For releases >=2.0-beta9 and <=2.10.0, the mitigation is to remove the ```java JndiLookup``` class from the classpath: ```bash zip -q -d log4j-core-*.jar org/apache/logging/log4j/core/lookup/JndiLookup.class```.

### Image credit

Image from [The Hacker News](https://thehackernews.com)