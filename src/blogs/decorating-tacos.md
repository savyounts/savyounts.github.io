---
title: "Decorating Tacos"
date: "2018-12-07"
tags: "blog"
---

Mmm.. tacos.

![](https://mixandmatchmama.com/wp-content/uploads/2018/03/Taco-meme-2.jpg)

So believe it or not, this post is more than just talking about my love of tacos, it's actually about Design Patterns -- specifically the Decorator pattern.

Within the realm of coding, a design pattern is simply a general, reusable solution to a commonly occurring problem within a given context. There are many different patterns used for many different situations so for now, we're just going to focus on the Decorator.

According to the GoF, the intent of the Decorator pattern is to:
> “Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.”


Sometimes you want to add a responsibility to a individual object, not to the entire class. While Inheritance has its place, it can be very inflexible and can't be controlled by the client. Inheritance may add the functionality you want, but it's also going to add it to every other instance within the subclass and you may not want ALL of those instances to have that functionality. For example, you may have a bunch of tacos, and you might really want some spicy salsa on one of them. But you're a wimp, so you don't want spicy salsa on all of your tacos, instead, you "decorate" one taco with the salsa.

Take a look at this code. Here we have a `Taco` class that has a price and ingredients.

```
class Taco
  attr_accessor :price, :ingredients

  def initialize(price:1, ingredients: "tortilla")
    @price = price
		@ingredients = ingredients
  end

end
```

That's a pretty boring Taco. Next we want to add ingredients, but we're at some super bougie artisanal Taco shop, so they price every ingredient separately. To do this, let's create some decorators. These decorators forward requests to the component (our taco) and can perform additional actions on our taco.

```
class WithGuac
  attr_accessor :taco

  def initialize(taco)
    @taco = taco
  end

  def price
    taco.price +  2
  end

  def ingredients
    taco.ingredients + ", guacamole"
  end
end


class WithBeef
  attr_accessor :taco

  def initialize(taco)
    @taco = taco
  end

  def price
    taco.price + 1
  end

  def ingredients
    taco.ingredients +  ", beef"
  end
end
```

Here we have created two Decorators, `WithBeef` and `WithGuac` (and we honestly should add many more but you get the point) that each take an instance of a `taco` as an argument. This taco is an object that will be 'enclosed' by the decorator. They each add functionality by adding their individual price and ingredient to the taco's price and ingredients. And the beauty of decorators:

> You can nest decorators recursively, allowing an unlimited number of added responsibility.

So before, with inheritance, I'd have to make a TacoWithBeef class and a TacoWithGuac class *and then* a TacoWithBeefAndGuac class. Now think if this taco was worth eating and had a few more ingredients... that’s a lot of subclasses. Instead we can simply do this:

```
taco = Taco.new
taco = WithGuac.new(taco)
taco = WithBeef.new(taco)

puts taco.ingredients  #=> "tortilla, guacamole, beef"
puts taco.price        #=>  4
```

In addition to adding functionality to my taco's original methods, a decorator can also add some new functionality. Remember the important takeaway here -- this pattern allows decorators to add functionality without having the subclass depend on the decoration.

```
class WithSpicySalsa
  attr_accessor :taco

  def initialize(taco)
    @taco = taco
  end

  def price
    taco.price + '.5'.to_f
  end

  def ingredients
    taco.ingredients + ", spicy salsa"
  end

  def spice_level
     "This is pretty spicy"
  end
end
```

Now we're back to our spicy salsa that we only want on that single taco. As you can see there's a new piece of functionality here, the spice_level. Normal tacos don't have that because they start out as just a tortilla. Once a taco is decorated by the` WithSpicySalsa` class, it now has this functionality, but a taco without salsa doesn't.

```
taco = Taco.new
taco = WithGuac.new(taco)
spicy_taco = WithSpicySalsa.new(taco)

puts spicy_taco.spice_level  #=> "This is pretty spicy"
puts taco.spice_level  #=> undefined method `spice_level' for #<WithGuac:0x007faad31242a8>
```

Pretty cool right?
So now you're all like "Cool, Sav... but instead of writing all of these subclasses that I then have to add my taco to in order to add these ingredients and prices, can't I just write one method INSIDE my Taco class to do that?'"

```
def add_ingredient_update_price(ingredient, amt)
    @ingredients += ", #{ingredient}"
    @price += amt
  end

taco = Taco.new
taco.add_ingredient_update_price( "lettuce", 2)

puts taco.ingredients  #=> tortilla, lettuce
```

Sure, that works. But now lets say your artisanal Taco shop also serves burritos and nachos with these same topping options. Now we have to rewrite that method in our Burrito class and our Nacho class, and that's not very DRY.

With our decorators we can REUSE that code on our new food group classes.

```
class Nachos
  attr_accessor :price, :ingredients

  def initialize(price = 2, ingredients = "chips, cheese")
    @price = price
    @ingredients = ingredients
  end
end

nachos = Nachos.new
nachos = WithBeef.new(nachos)

puts nachos.ingredients  #=> chips, cheese, beef
```

Ok, that was a lot, so let's "taco" 'bout it.

![](https://media.giphy.com/media/xjve2iD3I5Xpe/giphy.gif)

That was bad, I know, it won't happen again.

But really, let's sum up a few points:
Good things about Decorator Pattern:
+  	It has more flexibility than static inheritance - responsibilities can be added and removed at runtime, you are able  
      to mix and match responsibilities to instances of the subclass AND reuse that code with other classes.
+  It's easy to define new kinds of decorators independently from the classes of objects they extend.
+  Avoids feature-heavy classes high up in the hierarchy - you can define a simple class and add functionality
	 incrementally with Decorator objects.

Liabilities of the Decorator Pattern:
  - A decorator and its component aren't identical, and cannot be relied upon to be identical - you shouldn't rely on object
     identity when using decorators
  - lots of little objects - there are lots of objects that differ only in the way they are interconnected, this can make hard for
     another developer to learn and debug.
