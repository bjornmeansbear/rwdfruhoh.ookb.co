# Creating new files via prose.io

(This goes along with the video on vimeo here: )

Go to the folder you want, and then click the "new file" button up on top.

The browser should open a text editing window.

Change the title to the correct title, removing the date but keeping the prefix folder structure intact.

In the document section below, click in and delete the text that is there.

The document must start with at least this:

```
---
title: "Title of Project"
---
```

This is called the documents "Meta Data" and contains everything that isn't just the text of the post — link to images, what layout to use, which image to instead use on the featured blocks, etc.

here is an example of all the meta data options:

```
---
layout: slideshow
title: Station North Tool Library
date: "2012-10-01"
categories: 
  - community
image: 
  - "http://farm4.staticflickr.com/3805/8976872257_e359b45625_h.jpg"
  - "http://farm4.staticflickr.com/3771/8976873293_3318e01b17_h.jpg"
  - "http://farm8.staticflickr.com/7367/8978068252_56779d267f_h.jpg"
  - "http://farm8.staticflickr.com/7384/8978069832_b195487d22_h.jpg"
  - "http://farm8.staticflickr.com/7424/8978066812_188f1f2f88_h.jpg"
  - "http://farm8.staticflickr.com/7402/8976880279_7c1d90cac7_h.jpg"
  - "http://farm8.staticflickr.com/7456/8976874233_862b5d50ec_h.jpg"
featuretitle: The Tool Library
featureimg: "http://farm4.staticflickr.com/3771/8976873293_3318e01b17_h.jpg"
summary: "tk"
---
```

The categories you can pick from are as follows:
- "science and tech"
- "arts and culture"
- "scholars and fellows"
- "social justice"
- "community"

The layouts you can pick from are as follows: textonly, singleimage, or slideshow

Slideshow is the only layout that uses the "image" field. The rest will use the image from "featureimg" for the image that shows up on the homepage, as well as the image that shows up on the post in the case of "singleimage" (does this mean we don't need a "textonly" layout option???)



