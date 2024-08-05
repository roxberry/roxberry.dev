---
layout:     post
title:      Perf Engineering Post Mortem
subtitle:   Observations post project for performance consulting
comments:   true
date:       2017-04-05 14:00:00
author:     Mark Roxberry
excerpt:    Performance engineering is a black art, with a few potential traps along the way.  Here's just a few observations irrespective of the specifics of the engagement.
tags:       [performance]
categories:
    - performance
postimage: 
    src: "post.png"
    alt: "main post image"
featured:   true
---
# Performance Engineering Post Mortem
I have been working for 2 months in a performance engineering role for a client.  The project had 2 phases, phase 1 was to conduct an analysis of areas identified by the users at the client.  Phase 2 focused on analysis, recommendations and remediation of specific operations.  Performance engineering is a black art, with a few potential traps along the way.  Here's just a few observations irrespective of the specifics of the engagement:
1. You're probably not starting out at an optimal point in the lifecycle of the system.  Like security, performance is not a problem until it is - so it doesn't get attention until someone feels pain.
1. You're probably going to be rushed into "solving the problem" before you get a good grasp of how the system was developed, what choices were made through out its development lifecycle and what bad patterns are common in the architecture and code.
1. The people that are tasked to help you may have a personal stake in the system and may resent or fear your involvement as you'll be calling out their or their team's mistakes.  Recognize that this could happen and also that those mistakes may not be a result of incompetence - be objective and don't attribute blame, but also be resolute - your job isn't to make people look good or bad, your job is to get the system to perform better, so stick to your guns.
1. Always, always, always document.  Document setup tasks, document frustrations, document testing procedures, document every little observation.  Have good templates for reporting your documentation - templates for presentation, analysis, testing, results.