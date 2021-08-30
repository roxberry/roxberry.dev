---
author: "Mark Roxberry"
categories: 
  - data science
comments: true
date: 2021-08-29 01:00:00 +00:00
excerpt: "Moving SJSL to the new GotSport platform for scheduling required a solution to ETL data to the Arbiter platform for referees"
featured: true
layout: post
postimage: 
  alt: soccer field
  src: photo.jpeg
subtitle: "Photo by <a href=\"https://unsplash.com/@marioklassen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Mario Klassen</a> on <a href=\"https://unsplash.com/wallpapers/sports/soccer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>"
tags: 
  - data science
  - soccer
  - python
title: "ETL with Python and Pandas for Soccer Scheduling"

---
## New Platforms, New Features, Missing Cheese

  As the Information Officer for the [South Jersey Soccer League](http://www.sjsl.org), I'm tasked with making sure our platforms run and run well.  SJSL has over 500 teams from over 70 clubs in South Jersey.  Our clubs and teams depend on these systems for registration, game schedules, referees and week to week operations to get their players on the pitch.  

  This Fall, our platform provider for registration, schedules and clubs, [GotSport](http://www.gotsport) required SJSL to move off their legacy GotSoccer platform to their new modernized system.  This was a heavy lift for our scheduling process.  Scheduling works with data provided from each team registration, each club, each venue and their related fields to create an optimal schedule.
  
  To assign referees to this schedule, our assignors use a referee scheduling platform, [Arbiter](https://www.arbitersports.com) and GotSoccer, the legacy system was integrated with this platform.  From GotSoccer, the schedule could be synchronized at the press of a button.
  
  That cheese was moved.  No such feature to synchronize between GotSport and Arbiter.
  
  But ...
  
  Arbiter has an import feature and I can export the schedule from GotSport.  The tricky part is the Arbiter import validates the upload and Sites, Subsites - Venues and Pitches or Fields, need to map to the Arbiter data.  I need to get 2549 games into Arbiter for the referee assignors to start assigning referees.
  
  Python and Pandas to the rescue.
  
### UPDATES WILL FOLLOW
  
[SJSL GotSport Toolbox - ETL](https://github.com/SJSLORG/gotsport-toolbox/tree/main/etl)

### Results from the ETL

|Total Category|Expected|Actual|
|----------------|----------|--------|			
|Total Exported from GotSport|2549||
|Total Import Actual||2488|
|Total Import Errors||26|
|TBR (12/24)||24|
|Missing||11|




  