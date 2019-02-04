---
title: "Faster ActiveRecord Queries"
date:
---

I was recently working on a project where something pretty big was pointed out to me, querying straight from your database is MUCH faster than using Ruby to make the same calculations. Before, when I was grabbing or manipulating information from my database, I was using methods like

```
Word.all.map(&:letters)
```

`Map` is a very useful array method you can use to grab the information you need from each instance in your database. The problem with using it this way is that since it only works on arrays, Rails needs to select *all* the columns to instantiate a model for each row even though we really only want the 'letters' column. A better way to to this is to just ask the database for the information directly.

This can be done using another method, `pluck`. `Pluck` will select only the specified column from the table so no models need to be instantiated

```
Word.pluck(:letters)
```

This creates a SQL query that looks like this

```
SELECT letters FROM words
```


> SQL Databases have been optimized to be very fast and efficient in terms of data retrieval and manipulation. In general, using SQL to retrieve and sort data will be much faster than using a similar command in Ruby.

![](https://i.chzbgr.com/full/2703657216/h84D2668C/)

Since databases are optimized in this way, if we want to retrieve a list of addresses listed in order by street name, it is much faster to use

`Address.all.order(:street)`  -- which is an ActiveRecord query using SQL

than to use

`Address.all.sort_by(:street)` -- which uses Ruby to sort the data

Being proficient in SQL and ActiveRecord will help you to retrieve and manipulate data faster than by writing all of your logic in Ruby. The way databases are built make the efficient at sorting, ordering and pulling data. Using SQL commands when you can in your app can help to make your app run faster than if you were to write everything in Ruby.
