---
layout:     post
title:      Swift Tips
subtitle:   Notes and tips for Swift development
comments:   true
date:       2021-07-06 01:00:00
author:     Mark Roxberry
excerpt:    Post to track coding, other notables for Swift development
tags:       [swift, apple, projects, development]
categories:
    - development
postimage: 
    src: "post.png"
    alt: "main post image"
featured:   true

---
# Swift tips
Probably basic stuff, but wanted to keep a reference of useful tricks

## Simulator not updating the Launch Image
I added a Background color, ran the simulator, then added a Launch Image and reran the simulator, the image did not show.  Just restart the simulator.

## Object to JSON String
CustomObject using a data extension, I wanted to get the UUID and Color properties in JSON to reuse in a JSON file

```swift
    do {
        let encodedData = try JSONEncoder().encode(CustomObject.data)
        let jsonString = String(data: encodedData,
                            encoding: .utf8)
        print (jsonString ?? "no json")
    } catch {
        fatalError("Couldn't process json")
    }
```

JSON to CustomModel

```swift
    if let jsonData = jsonString?.data(using: .utf8) {
        let objectFromJsonData = try JSONDecoder().decode(CustomObject.self,
                                                    from: jsonData)
        
        print(objectFromJsonData.id)
    }
```

## Print or NSLog
Use print for quick and dirty, use NSLog for more info.