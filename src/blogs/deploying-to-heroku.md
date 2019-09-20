---
title: "Deploying to Heroku"
date: "2018-12-13"
tags: "blog"
---

Today I learned a few valuable lessons while deploying some of my old projects to Heroku.
1. If you have a Rails app built with newer versions of Ruby and Rails and are using Postgres for your database management, then deploying your app is pretty simple.
2. If you have a React app you want to deploy, it takes a bit more configuration to get it all up and running.
3. If you have a React app with a Rails api backend, you've got a journey ahead of you.

Let's quickly go over the first one.

# Deploying a Rails App
**1. Making Sure You're Set Up Correctly**
First things first, check to make sure you have up-to-date versions of Ruby and Rails. Ruby should be at least version 2.4.0 and above, Rails should be version 5. You can use `ruby -v` and `rails -v` to check those. Next, make sure you are using Postgres and not Sqlite3 for you database management. If you are using Sqlite3, just change out the 'sqlite3' gem for  the 'pg' gem. After switching the gems, go into your database.yml file and make sure you change the adapter for all of the environments to 'postgresql' and name your database. You can check out Heroku's[ website ](https://devcenter.heroku.com/articles/getting-started-with-rails5)to see exactly what this file should look like. Once that is updated go ahead and `bundle install`.  

**2. Connect to Heroku**
Now you are ready to connect to Heroku. First type `heroku login` into your terminal and put in your credentials (make sure you sign up for a free account first). Once you are connected, it is now time to create a new Heroku app, to do that, type `heroku create` in the terminal. If you want to change the name of your app you can type `heroku apps:rename new_name`. You can check that your app has been connected and renamed with `git remote -v`.

If you want to use a Heroku app that already exists, you can type` heroku git:remote -a my_exiting_app`.

**3. Push Your App and Database to Heroku**
Now that you are connected, you are ready to deploy! Go ahead and use `git add . `and `git commit -m` to make sure you commit any changes that you have made since the beginning of this process. Next, enter `git push heroku master`.  If you run into a problem where Heroku doesn't recognize which programming language you are using, you can tell Heroku what language to use to build the application. You do this by using buildpacks (specific language components that Heroku uses). You can set them to Ruby by using `heroku buildpacks:set heroku/rub`.  You can set buildpacks for any of the supported languages you need and you can use multiple buildpacks for projects that use more than one language (we'll see this when we get to the react app with a rails api).

Lastly, we want to migrate the database from the Rails application to Heroku. To do this, run `heroku run rake db:migrate` and if you have any `seed data you can run heroku run rake db:seed`.

To visit your application, you can run `heroku open`.

Sometimes you may have some issues with the styling not going through properly, if this happens, check out `heroku logs` to see what errors come up. Sometimes the issue will be that a static file won't be processed when deployed to Heroku, the best course of action here is to use a CDN vendor to host the static assets.

IF, you just need your app up and running and aren't concerned with speed or performance then you can go into your config/environments/production.rb file and make these changes:
```
config.assets.complie = true
config.serve_static_assests = true
```

**This is not the recommended what to go about this because it will slow down performance, but it will get up up and running quickly if that is all you need
**

Yay! We now have our Rails app up and running on Heroku! Next week I'll go over how to deploy a React app.
