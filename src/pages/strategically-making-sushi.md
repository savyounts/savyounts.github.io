---
title: "Strategically Making Sushi"
date: "2018-12-11"
---

In an earlier post I talked about the [Decorator Design Pattern](http://savyounts.com/decorating_tacos). The Decorator pattern is like changing the "skin" of a class, you're only adjusting the outside look of it, not anything that actually happens within the class itself. Today, we're going to dive in and talk about how to change the "guts" of a class with the Strategy Pattern.

![](https://media.makeameme.org/created/prepare-the-strategy.jpg)

> The intent of the Strategy pattern is to define a family of algorithms, encapsulate each one and make them interchangeable. These algorithms can also vary independently from the clients that use them.

Oooo scary, algorithms. No worries, my friend, we aren't necessarily talking about big computer-sciency algorithms. Instead we're talking more about any code that follows a sequence of steps to get a result.

To help illustrate how a the strategy pattern works, we're going to use another food favorite, sushi.

If I have a Sushi class that makes a variety of types of rolls I could have something that looks like this:

```
class Sushi
  attr_reader :base, :type

  def initialize(type)
    @base = "rice"
    @type = type
  end

  def price
    if type == "California Roll"
      5
    elsif type == "Philadelphia Roll"
      4
    elsif type == "Rainbow Roll"
      7
    else
      "we dont serve this kind of sushi roll, I can give you a bowl of rice for $3"
    end
  end

  def make_soosh
    if type == "California Roll"
      "rolling up my crab, avocado and cucumber in my #{base}"
    elsif type == "Philadelphia Roll"
      "rolling up my Avocado, shrimp tempura, cucumber, tobiko in my #{base}"
    elsif type == "Rainbow Roll"
      "rolling up my crab, avocado, cucumber, tuna, avocado, salmon, shrimp, yellowtail in my #{base}"
    else
      "we dont serve this kind of sushi roll, so all you have is a bowl of rice."
    end
  end

end

rainbow_roll = Sushi.new("Rainbow Roll")
puts rainbow_roll.ingredients   #=> rolling up my crab, avocado, cucumber, tuna, avocado, salmon, shrimp, yellowtail in my  rice
puts rainbow_roll.price         #=> 7
```

As you can see this class has a lot going on, but it also only has three different types of sushi you can choose between (or a bowl of just rice). Let's be real, we haven't even gotten to the good rolls, and I guess this place doesn't even have any sort of customized rolls... super lame.

Let's analyze this Sushi class real quick, what do we notice? First off, the base for all the rolls is the same and we can assume that the base price is the same since it's just rice. The only thing that differs it its behavior -- what ingredients are listed out for each type and the price associated with them. There are also a lot of conditionals...

These are all indicators that you may want to use a Strategy pattern. Now we'll abstract that logic so we can customize our own rolls and behavior.

First we will make an updated Sushi class that can be initialized with some ingredients and has simple #price, #all_ingredients and #make_soosh methods:

```
class Sushi
  attr_accessor :ingredients
  attr_reader :base

  def initialize(*ingredients)
    @base = "rice"
    @ingredients = *ingredients
  end

  def price
    3.0 + ingredients.reduce(0){ |sum, i| sum + i.price}
  end

  def all_ingredients
    ingredients.collect{|i| i.name}.join(", ")
  end

  def make_soosh
    "rolling up my #{all_ingredients} in my #{base}"
  end

end
```

Poof. No more conditionals. Next we need to make ingredient classes...

```
class Avocado
  def price
    1.0
  end

  def name
    "avocado"
  end
end

class Crab
  def price
    1.0
  end

  def name
    "crab"
  end
end

class Cucumber
  def price
    0.5
  end

  def name
    "cucumber"
  end
end
```

Now for some custom sushi magic

```
cali_roll = Sushi.new
cali_roll.ingredients << Cucumber.new
cali_roll.ingredients << Crab.new
cali_roll.ingredients << Avocado.new

puts cali_roll.price     #=>  5.5
puts cali_roll.make_soosh   #=> rolling up my avocado, cucumber, crab in my rice

```

So what did we just do?! First off, our Sushi class is just a base, it holds all the information that EVERY sushi needs to know, which in this case it's just the base price and ingredients, as well as how to manipulate them. Then we will put all of the custom functionality in different classes. To connect the two we simply use dependency injection.

> Dependency injection is a technique whereby one object (or static method) supplies the dependencies of another object. A dependency is an object that can be used (a service). An injection is the passing of a dependency to a dependent object (a client) that would use it.

AKA instead of creating dependencies throughout your code by either hardcoding ingredients or even creating new instances of another class within your base class, you can separate and inject them by adding an instance of the strategy  in the initialize method of your base class.

This gives us the freedom to make ANY ingredient class we want, **as long as it responds to a #price and #name method.** If we want a Salmon class, go for it. If you want an Eel class, more power to ya. If you want a Poprocks class (yes, I have had Poprocks on my sushi), by all means, make a Poprocks class, just make sure it responds to the correct methods.

*"But why #price and #name?" *

In this example, our ingredient classes need to respond to #price and #name because those are the methods that our Sushi class is calling on those instances. If Sushi did something like:

```
* #Sushi class*

  def shout_ingredients
    ingredients.collect{|i| i.shout}.join(", ")
  end
```

Then all of our ingredient methods would need to respond to a #shout method as well:
```
*#Avocado class*

def shout
    "AVOCADO"
  end
```

This way you can insert any food into sushi, but won't be able to insert an object that doesn't respond to these methods.. something like, a Panda.  

```
class Panda
  def type
    "I'm a Panda"
  end

  def nomnom
    "I eat bamboo"
  end

end

panda_sushi = Sushi.new
panda_sushi.ingredients << Panda.new

puts panda_sushi.price    #=> NoMethodError: undefined method `price' for #<Panda:0x007fbe4b3dc3c0>
```

![We don't want panda sushi...](https://i.imgflip.com/1bukvo.jpg)


Let's *wrap* it all up.

We use the Strategy pattern to change the "guts" of an object. Some of its main use cases are when you have a bunch of classes that only differ in behavior, or are littered in conditionals.

A few benefits of the Strategy pattern are
 + Families of related algorithms - strategies define a family of algorithms for contexts to reuse
 + Alternative to subclassing - using Inheritance with subclasses hard-wires behavior into a context making it harder to maintain and extend
 + you can vary the algorithm dynamically - this can happen independently of its context
 + They eliminate conditional statements
 + Provide a choice of implementations - they can provide different implementations for the same behavior
 + Allows the context to choose its behavior at runtime

A few drawbacks:
 - Clients must be aware of the different strategies in order to take advantage of them
 - Increased number of objects

Differences between Strategy and Decorator patterns

Decorator changes the "skin" of an object while Strategies change the guts. When working with Decorators you will be calling methods on the outermost object (which is one of your decorators), so you only have access to methods that your decorators have. That's why when using a Decorator you want your base class to be as lightweight as possible and you can let your decorators add functionality. On the other hand when working with Strategies, you will be calling methods on your base class (in this example, we call them on our Sushi object). Here the base class can be built out a bit more and you want each strategy to be as lightweight as possible since every strategy needs to respond to the same methods.
