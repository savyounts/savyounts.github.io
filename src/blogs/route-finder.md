---
title: "Route Finder -- A Sinatra Application"
date: "2018-10-08"
tags: "blog"
---

If Sinatra is just a starting point for being introduced to Rails, then I'm convinced that Rails is magic. I just completed my Sinatra web application, Route Finder, which was so incredibly easy and quick thanks to all of the Sinatra built-in features. Associations couldn't have been simpler to put together and everything flowed fairly easily. After getting all of my logic and functionality set up, the part that I spent the majority of my time on was the CSS to try to make my app look somewhat appealing.

A bit about Route Finders:
Route finders is an app where a user can sign up and create an account where they can keep track of all of the climbing routes they are currently working on or have completed. A user can create a new route that includes a route name, grade and location as well as their current status on that route. Are they lead climbing or top roping? Have they even started it, or just checking it out? What part are they currently stuck on?

Once a route has been created, it is added to a route list which holds all the routes that have been created by all the users. From the route list, the user can click on a route to get more information including who is working on that route and what current issues they are having with it.

If the user clicks on a route that they don't have in their route list, but think they may want to look into it, they can add that route, this gives them the ability to create a personal route status for it. If it is a route that they do already have in their route list, they can choose to update their individual route status. A user can also delete their route status if they don't want to associate with that route anymore.

Lastly, users can see other user pages to see what all routes they are working on or have completed.

Lessons:
In my last big project, I learned to start small and build up. Thankfully, I learned from my last experience and did just that which proved to be so much better. For this project, I wasn't sure how much styling I was going to do for my site so once I formed my idea, I just focused on my backend logic and functionality. This was fine if I wanted to just have a simple black and white app, but this strategy made it more difficult when it did come time to add in my own CSS. Now I know that after I have my initial planning done, I should wireframe how I want my app to look as a final product. This way when I am building that initial logic and functionality, I can be thinking ahead of how things should be laid out, what should be grouped together in divs and what features will have a similar look so I can go ahead and give them appropriate class names.

On to bigger and better things! Rails, here I come!
