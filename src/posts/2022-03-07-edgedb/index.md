---
layout: post
title: "EdgeDB resources"
subtitle: "A Python based database, marrying objects and schema for a next gen graph database"
comments: true
date: 2022-03-07 11:00:00
author: Mark Roxberry
excerpt: "EdgeDB is a Python based database, marrying objects and schema for a next gen graph database."
tags: [database, python]
categories:
  - database
postimage:
  src: "post.JPG"
  alt: "Standing on the water's edge"
featured: true

---

## EdgeDB

EdgeDB is an object / schema based database written in Python.  I'm looking at it for the graph <> relational features.  Linking entities appears novel.

The feature set is described on the project site, [EdgeDB.com](https://www.edgedb.com):

- schema graph
- object types
- computed properties
- constraints, cascading features

Does it make using document data easier to maintain, update?

### Quickstart

install edgedb on Mac or Linux

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.edgedb.com | sh
```

or using [Docker](https://www.edgedb.com/docs/guides/deployment/docker)

```bash
docker run \
  --name edgedb \
  -e EDGEDB_SERVER_PASSWORD=secret \
  -e EDGEDB_SERVER_TLS_CERT_MODE=generate_self_signed \
  -v /my/data/directory:/var/lib/edgedb/data \
  -d edgedb/edgedb
``` 


### References

[EdgeDB Home](https://www.edgedb.com)

### Image Credit

Photo by <a href="https://unsplash.com/@ivntsa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ivan Tsaregorodtsev</a> on <a href="https://unsplash.com/s/photos/cliff-of-dover-edge?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>





