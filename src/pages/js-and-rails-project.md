---
title: "JS and Rails Project"
date: "2018-11-18"
---

This project was hard, that's just how it is, but I did learn a lot throughout my struggles to complete this project. First off, I had a difficult time deciding the best way to implement the AJAX requests that I was required to have into the Rails app I had already built. Once I made a decision, I still ended up going back and changing how to do it several times.

One of the biggest struggles for me was figuring out how to get ahold of the information from all of the rails objects to be able to manipulate everything correctly in my JS. My index and show pages were mostly straight forward, the only information that I needed to bring over were the current user's Id and for the destination show page, also the destination Id. This was easily done by storing data attributes inside the html elements within the views. Once I got to POSTing comments with AJAX and then PATCHing with AJAX to update the amount of likes each comment had, that's when things started getting a bit more complicated.

Another issue I ran into  was trying to bind event handlers to elements that weren't currently present on a page. For example, from the user show page you can click one of two buttons, "My Trips" or "My Destinations",  once clicked they each will send an AJAX request to grab and display all the respective information while also displaying a new button to reach the other option. So if I clicked "My Destinations", all my destinations would show up along with a button that said "My Trips". Since this new "My Trips" button is different from the previous one, it did not get that event handler bound to it.

To fix this, I needed to use a delegated handler. This allows you to attach a handler to one or more events for all elements that match the selector, now or in the future, based on a specific set of root elements. Now, when I create my new "My Trips" button with a class of "my-trips" (just like the original), both buttons will respond to that event handler.
This changed my code from:

```
$('.my-trips').on('click',  (e) =>{
      //my function logic here
})
```

to:

```
$('#user-buttons').on('click', '.my-trips', (e) =>{
      //my function logic here
})
```

I just had to find the closest parent element to those buttons that is always on the page.

There were a lot of little things about JS that weren't necessarily covered in our course, so it took a lot of digging to figure out why they weren't working they way I thought that they should. I do feel more comfortable with JS and AJAX than I did walking into this project and hopefully will continue to get the feel for it as I continue writing more and more.
