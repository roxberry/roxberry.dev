---
layout:     post
title:      2021 Useful tools and tips for web work
subtitle:   Post to capture tool and tips.
comments:   true
date:       2021-05-02 23:00:00
author:     Mark Roxberry
excerpt:    Capturing useful tools and tips for working with the web and data
tags:       [toolbox, tips, javascript, html]
categories: 
    - technology
postimage: 
    src: "post.png"
    alt: "keyboard view"
featured:   true
---
# Tools and Tips

Blog post to capture useful web tool and tip stuff

<!-- ## Sitesucker, curl  -->

## Html Select Options to Plain text

1. On the page with the dropdown box (in HTML, the `select` box), inspect the element.
1. Copy the options in the `<select>` element or copy the `<select>` item and delete the `<select>` open and close tags.
1. Paste into a file into Visual Studio Code
1. Using Find and Replace, select the Regular Expression search in the Find input box.
1. Use the following regex `\s*</?option.*?>`
1. In Replace, leave empty and select Replace / Replace All