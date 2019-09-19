---
title: "ActiveRecord Aliases"
date: "2018-11-11"
tags: "blog"
---

In my last project, I learned how to work with ActiveRecord aliases, so I decided to write a little about how those work and why you need them.

First, a bit about my project and what I was trying to accomplish...
The Rails app that I was working on was a travel app, I had several models but three big ones were my `Users`, `Trips`, and `Destinations`. `Trips` were seen as my join table so that `Users` and `Destinations` could have many `Trips`, a `Trip` belongs to a `User` and a `Destination` and therefore, `Users` have many `Destinations` through `Trips` (and vice versa).
Thats a lot of words when typing out, but with ActiveRecord `has_many`, `belongs_to` and `has_many  through:` associates, is a pretty simple set up.

Additionally, my `User` is the one who will create these `Destinations`. So I wanted my `User` to be able to have many `Destinations` directly as well, so that a `Destination` belongs to its creator (`User`). In an ideal world I wanted to be able to call `my_user.destinations` and have all the destinations that `my_user` created and that they had through their `Trips`. Unfortunately, it is not an ideal world. BUT, thankfully, because of ActiveRecord aliases, it still isn't difficult to do this.

***Creating an alias***

Typically when you are creating a association between two tables, you will put a foreign key either in the join table or for just a `has_many` `belongs_to` relationship, in the child table. To create an alias, you will use the same idea, but you will use a different name for that foreign key.
In the program I created above, I already had a user_id and `destination_id` column in my `Trips` table. To be able to directly connect my `User` and `Destination` tables, I added a foreign key to the `Destination` table but called it `creator_id`.
For this example, my user and my creator are the same, but by naming it creator_id, I can distinguish better what this foreign key means and how these tables are connected.

**But wait...**

Doesn't ActiveRecord use the assume that the column used to hold the foreign key on the other model is the name of this model just with the suffix_id ? So how does it know that `creator_id `is the same as the `User` id???

Enter `:class_name` and `:foreign_id` options.  ActiveRecord associations have several options that you can tack on for extra clarification of customizations, these are just two of them. Use `:class_name` when the model cannot be derived from the association name, you can use this option to supply the model name. The other option, `:foreign_key` is what lets you set a custom name for the foreign key in the table, and then shares with the model what the name of that key is. Once our models are set up, this is how that association will look:

```
class User
      has_many :custom_destinations, class_name: "Destination", foreign_key: "creator_id"
end
```

```
class Destination
     belongs_to :creator, class_name: "Destination", foreign_key: "creator_id"
end
```


So... now what?
Glad you asked. Now, when I call `my_user.custom_destinations` I get back all of the `Destinations` that `my_user` created and when I call `my_destination.creator` I get back the instance of the `User` who created that `Destination`. Finally, if I still want that method to get back ALL of a specific user's destinations (ones they created and ones that they have through `Trips`), I can write this method in my `User` model:

```

def all_destinations
   destinations + custom_destinations
end
```

So, to sum it all up, ActiveRecord is cool and even if it can't completely read your mind on how to associate objects, it gives you a pretty easy way to go about doing it. ActiveRecord associations have many other cool options you can add to help customize your associations, this is just the beginning.
