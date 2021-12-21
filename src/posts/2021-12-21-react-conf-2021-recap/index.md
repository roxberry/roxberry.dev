---
layout: post
title: "React Conference 2021 - State of their Art"
subtitle: "Vision is the art of seeing what is invisible to others. - Jonathan Swift"
comments: true
date: 2021-12-21 10:00:00
author: Mark Roxberry
excerpt: Recap of the 6th React Conf, hosted online - React 18, concurrency, Suspense
tags: [react, conference, coder]
categories:
  - development
postimage:
  src: "post.png"
  alt: "React Logo banner image"
featured: true

---

## React Conference 2021 - State of their Art

[React Conf Website](https://conf.reactjs.org)

### Feature Recap

#### Concurrent Features

- implement Concurrent renderer in React 18 with no (known) breaking changes

#### Suspense and Server Components

- granular component streaming from the server

#### Developer Notes

- new React DevTools team
- new Timeline Profiler for debugging

#### React 18 RC

Available for feedback:

```bash
npm install react@rc react-dom@rc
```

Change entry to use *createRoot*

```javascript
// before
const container = document.getElementById('root');
ReactDOM.render(<App />, container);

// after
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>);
```


### References

[React Conf Website](https://conf.reactjs.org)

[React Conf 2021 Recap](https://reactjs.org/blog/2021/12/17/react-conf-2021-recap.html)

[The Plan for React 18](https://reactjs.org/blog/2021/06/08/the-plan-for-react-18.html)

### Image Credit

[React Banner from Free Code Camp post](https://www.freecodecamp.org/news/crud-using-react-41d047224e26/)

### Quote Credit

Jonathan Swift Quotes. (n.d.). BrainyQuote.com. Retrieved December 21, 2021, from [BrainyQuote.com] Web site(https://www.brainyquote.com/quotes/jonathan_swift_122246)
