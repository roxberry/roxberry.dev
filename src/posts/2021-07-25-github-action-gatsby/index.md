---
layout: post
title: Github Action for Gatsby Publish
subtitle: Steps to enable gatbsy publish on a push to main branch
comments: true
date: 2021-07-25 01:00:00
author: Mark Roxberry
excerpt: Automating my site posting with Github actions
tags: [site, development]
categories:
  - development
postimage:
  src: "post.png"
  alt: "main post image"
featured: true
---
# Gatsby Publish Github Action for Roxberry.DEV
## Why?
The gatsby template includes scripting to deploy from whereever you cloned your code.  It works just fine and is reliable when everything is set up on my machine.  The package.json includes the deploy script:

```javascript
  "scripts": {
      ...
    "deploy": "gatsby build --prefix-paths && gh-pages -d public"
  },
  ```

However, there are 2 drawbacks for my workflow (and my goal to start writing more):

1. You can deploy without a commit and push to the repository
1. You can't deploy without running the deploy script, so any work on the site on Github or my iPad won't get deployed until I commit and push one one device and then pull and deploy to the same repo on my computer.  Ain't nobody got time for that.

I was using a Github Action for my Jekyll site, prior to moving to Gatsby, and that worked when I pushed to branch and kickoff the publish action.  This action was a bit more involved as I was using Azure for a host and it required a few more configuration hurdles to set it up.

For my current site, I thought it has to be pretty simple - push to main branch, trigger an action, copy to gh-pages branch and that's that.  Turns out, that is that and I was able to get it working pretty fast.

I documented my steps in case I need to go back and change anything - e.g. I would like to update the siteMetadata.version in the gatsby-config.js file at some point.  Here are the steps

## Steps to publish a Gatsby site to gh-pages 


### 1. Create a new worklfow in the repository Actions section

``` yaml
name: Gatsby Publish

on:
  push:
    branches:
      main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: enriikke/gatsby-gh-pages-action@v2
        with:
          access-token: ${{ secrets.ACCESS_TOKEN }}
          deploy-branch: gh-pages
```


### 2. Create a personal access token (PAT), select the *repo* permission.

[Authentication in a Github Action Workflow](https://docs.github.com/en/actions/reference/authentication-in-a-workflow)

### 3. Create a Secret in the repo: ACCESS_TOKEN and use the new PAT token (note the workflow YAML file specifies the ACCESS_TOKEN parameter).

### 4. Build should kick in and go green

### 5. Profit?
And lo and behold, my site is passing (hopefully this shows it's passing):
[![Gatsby Publish](https://github.com/roxberry/gatsby-roxberry/actions/workflows/main.yml/badge.svg)](https://github.com/roxberry/gatsby-roxberry/actions/workflows/main.yml)


## Next things

- [ ] Improve this post with images from Github
- [ ] Add embedded gist for the main.yml
<!-- <script src="https://gist.github.com/roxberry/f6f58e2212346fd8c699c1d8c8cf8bcf.js"></script>
{% gist f6f58e2212346fd8c699c1d8c8cf8bcf %} -->