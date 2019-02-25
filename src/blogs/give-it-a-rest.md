---
title: "Give It a REST"
date: "2018-09-22"
tags: "blog"
---

REST stands for REpresentational State Transfer and it is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other.  It does not enforce any rules on how it should be implemented, it is just a high-level design guideline to help improve consistency. In REST, the primary data representation is called a Resource. Resources should only have one logical URI that should provide a way to deliver the data that the client requests. It is best to name your resource and web page the same.

A resource can be a single item or a collection of items.
*    `"customers"` is a collection resource that would use the URI `/customers`
*    `customer` is a single resource that would use the URI `/customers/{customerId}`

A resource can also contain a sub-collection of resources
* If customers have accounts, you can reach all of a customer's  `accounts` using `/customers/{customerId}/accounts`
* If you just want to see a single account of a customer you would use `/customers/{customerId}/accounts/{accountId}`

RESTful URI's should refer to a resource as a noun and not a verb.

When connecting controller actions to views for CRUD functions in an application, it is best to follow this outline. Here I am using and example of a blogging app:

CREATE :
* The `get  '/blogs/new'` route will render an erb file that has a form where you can write a new blog. You may want to name this erb file `new.erb`.
* Once submitted, the form sents a `POST` request to another controller action, `post '/blogs'`. In this controller action, you will use the params hash and the `#create` method to create a new instance of a blog. It will also render an `index.erb` file where all of your blog posts will be shown.

READ:
* To see all of the blog posts, you would create a controller, `get '/blogs'`. This should also render the `index.erb` file to show all of the blog instances.
* If you only want to see a specific blog, you can use the URI for a single item and have a controller `get '/blogs/:id`. Within the block of this controller you can set an instance variable equal to the blog that you want using the `#find` method with an argument of the blog id (`params[:id]`) on the Blog class. Then use that instance variable to display the blog and its contents in the `show.erb` view page.

UPDATE:
* To update a blog, you would need to create a controller action that brings you to a new form where you can make edits.
* Use `get '/blogs/:id/edit'` to render an `edit.erb` view page with that form. Within the html `<form>` tag, you will need to set the `action="/blogs/<%= @blog.id %>"`. Make sure you are using erb tags to dynamically set the blog id. You will also need a hidden input field with a `name="_method"` and `value="patch"`. Also be sure to  include `use Rack::MethodOverride` in your `config.ru`
* In your controller, set the instance variable of the blog using the `#find` method again.
* Once the form is submitted, it will send a `PATCH` request to `patch '/blogs/:id`. This controller action will find the instance of the model to update and save the instance. Then it will redirect to `'/blogs/#{blog.id}"` to show the updated show page for that blog.

DELETE:
* Lastly, to delete a blog, you will need to have a delete button that is also shown on the `show.erb` view. This will be a form with a hidden input field like in the edit form, but with a `value="delete"`.
* Make sure you have a submit button whose value is also `"delete"`.
* If the user is on a specific blog's show page and hits the button, it will send a `DELETE ` request to `delete '/blogs/:id/delete'`. In this controller, you will find the instance using the id and then delete the instance.
