---
title: "Local Storage"
date: "2018-11-29"
tags: "blog"
---

While I was working to add Javascript to my Rails application I ran into a slight problem. In one of my views, I had two links that should conditionally show up depending whether or not you were the owner of the object on that show page:

```
<% if @destination.creator == @current_user %>
      <div id="conditional-buttons">
        <%= link_to "Update this destination", edit_destination_path(@destination), id:'update'%>
        <%= link_to "Delete this destination", @destination, method: :delete, id:'delete' %>
      </div>
<% end %>
```

This worked perfectly for me when I had just a Rails app, but then I added a next button to my page so you could asynchronously flip through the different Destination objects and have their information show up without reloading the page. All of content on the page switched how I had hoped, but the buttons didn't change when I switched to view a Destination that I did not own, allowing me to update or delete that Destination when I shouldn't be allowed to.

The issue was that in the above code snippet, I am carrying over the same @destination.id of the original show page instead of updating it to the new destination.id of the current one that is showing. Since that was written in ruby, I wouldn't be able to update that value in my JS file. My other option was to take that code out of my view and rewrite it in my JS file. My issue with that was how to grab that @destination object that is defined in the controller so I can use the creator_id to compare to my current user.. whose information I also wouldn't be able to grab from the controller the same way I had in my view file.

The answer:
Local Storage.

Before HTML 5, application data had to be stored in cookies, included with every server request, but now with web storage, web application can store data locally within the user's browser without affecting website performance. HTML web storage provides two objects for storing data on the client: localStorage and sessionStorage.
SessionStorage stores data for one session while localStorage stores data with no expiration date -- localStorage data will not be deleted when the browser is closed.

LocalStorage has 5 methods to choose from that you can use in your web applications:

**setItem()** - adds a key and value to LocalStorage
 - setItem() take a key and a value and can only store strings


`window.localStorage.setItem('name', 'Savannah')`

 - if you need to store an array or object, you can convert it to a string using JSON.stringify

```
const person= {
'firstName' : 'Savannah',
'lastName' : 'Younts'
}
window.localStorage.setItem('user', JSON.stringify(person))
```




**getItem()** - access a stored dtata value
 - getItem() accepts a key and returns a value as a string -- you may have to convert it back to JSON using JSON.parse()

`window.localStorage.getItem('name'`)


or


`JSON.parse(window.localStorage.getItem('user')`



**removeItem()** -  remove a key from the storage

`window.localStorage.removeItem('user'`)



**clear ()** - clears storage of all records for that domain

`window.localStorage.clear()`



**key()** -  finds the key of a stored value

`var keyName = window.localStorage.key('Savannah')`





DON'TS for LocalStorage:
 - don't store any sensitive information in localStorage, it is very insecure so should not hold any information like passwords.
 - it is not a substitute for a server database -- information is ONLY stored in the browser
 - it is not used to store very large amounts of data, it is limited to 5 MB
