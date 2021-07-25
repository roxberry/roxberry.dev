---
layout:     post
title:      Delta
subtitle:   Catching up
comments:   true
date:       2020-03-01 23:30:00
author:     Mark Roxberry
excerpt:    Back and forth discussion of relevant topics.
tags:       [continuous deployment, planning, projects]
categories:
    - planning
postimage: 
    src: "post.png"
    alt: "main post image"
featured:   true
---
> "History is merely a list of surprises. It can only prepare us to be surprised yet again."

> -- Kurt Vonnegut

## Post from my iPad
  I had been meaning to make my blog site more bloggable. I wanted to really be able to edit some markup on my iPad, grab and resize a few images and get it to my site.  On my MBP, I run the Jekyll / Grunt toolchain.  This compiles the site, compiles the LESS styles and JavaScript.  It also minifies these assets and compresses the images.  I am not able to do this yet on the iPad, but I thought maybe a hosted Docker container could do it.

  Basically, I need a container in the cloud that can run the toolchain.  Firstly, checkout my source after I push to my Github repo.  Then bundle install any tools, e.g. Jekyll 4.0.  Build will use the _config.yml and compile the source.  Push to my repo deployment branch and let Azure pull the code into the app service.

  So what to use to do that? AWS containers? Maybe, maybe check that out sometime. But I decided to take a look at [Github Actions](https://help.github.com/en/actions).

  I found a Jekyll action and was able to create a workflow that runs on every push.  Right now, all but minification and image compression is in place.  Posting from my iPad now, hopefully, I'll be a bit more productive.
 

## Professional

### CCSP

## Robots

### Future Engineers

## Soccer

### 3v3

### Offseason

## Apps and Games

### Standout

### Remnant

## Writing

### Blog Plan

### Fiction