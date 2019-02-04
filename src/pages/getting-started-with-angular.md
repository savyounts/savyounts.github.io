---
title: "Getting Started With Angular"
date: "2019-02-19"
---

During my time at Flatiron School, we spent most of our Frontend time learning and working with [React](https://reactjs.org/), a JS library that uses components that make it painless to build interactive UIs. As I have been going through my job search, I've seen many postings that ask for experience in Angular, another JS library. This made me curious and want to see what the differences are and find out which one I may like better, so I decided to start Flatiron's Angular course.

First to compare React and Angular, here is a table that shows some of the similarities and differences of the two:
![AppInventiv](https://appinventiv.com/blog/wp-content/uploads/2018/07/React-and-Angular-A-Brief-Overview.png)

Although similar in that they are both component based libraries, overall, they are quite different. Angular has a bit steeper learning curve than React does, but it also comes with several nice out-of-the-box features:

* Dependency injection
* Templates, based on an extended version of HTML
* Routing, provided by @angular/router
* Ajax requests using @angular/common/http
* @angular/forms for building forms
* Component CSS encapsulation
* XSS protection
* Utilities for unit-testing components.

Some of these are built-in into the core of the framework, so you don't have the option to not use them. Developers will need to be comfortable with things like dependency injection and be able to use them to build even small applications. Other features like the angular form can optionally be used.

Angular also uses TypeScript, this is a new language built on top of JavaScript. TypeScript has been heavily influenced by Java and .NET, so if you have used these before, you may find it a bit easier to pick up.

RxJS is a reactive programming library that is also used by Angular in their HTTP module. It allows for flexible handling of asynchronous operations and events and is a combination of the Observer and Iterator patterns blended with functional programming.

***Angular Setup***
When setting up your Angular application you will have a "Module" for each part of your application. A module is a container that contains the directives, templates, controllers, and services -- each module should provide a set of functionality and you must have at least one module for your application to run. You should create a module for:
* each feature
* each reusable component
* an application module that your app uses as a base

Angular also has a lot of plugins that will each be their own module.

***Setter/Getter syntax***
You need to tell Angular about your modules, you do this by using this syntax:
```
angular
     .module('myModule', [])
```

The empty array above is very important. This tells Angular you are creating an new module and you can include any dependencies that module may need inside the array. If you leave out the array you are telling Angular to receive a module that has already been created. For everything that you get/set in Angular, one parameter means *get*, two parameters means *set*. Once you get into things like controllers and directives, they will need to be attached to a module.

```
function ExampleController() {
}

angular
     .module('myModule')
		 .controller('ExampleController', ExampleController)
```

Here we first fetched our already created module and then created a new controller that is attached to it.

Lastly, to use a module, you need to add it to your HTML file where it should be used using the `ng-app` HTML attribute

```
<div ng-app="myModule">
    <!-- everything that uses the module -->
</div>
```

This is just the very tip of Angular. Once you have modules, down next you can move into controllers, directives and many other parts.
