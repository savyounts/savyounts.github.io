---
title: "Google Analytics"
date: "2019-06-18"
tags: "blog"
---

Google Analytics is used to measure all sort of traffic on websites. It can answer questions like "How many people visit my website?", "What websites send traffic to my website?", "What content do my visitors like the most?" and so on.

To get started with Google Analytics, you first need to create a free account. Once you have that setup and are signed in you need to set up a property. A property represents your website or app and is the collection point in Analytics for the data from your site or app. You'll need to set up a new property for each site you want to collect data from -- this also generates a Google Analytics ID for each site.

Each property contains views, which are subsets of reporting data for the property. A View is your access point for reports, you give users access to a view so they can see the reports based on that view's data. For example, you may have three views for your property:
1.  one to view the data from www.yourdomain.com
2.  one view of only AdWords traffic to www.yourdomain.com
3.  one view of only traffic to a subdomain like www.checkout.yourdomain.com

When you add a new web property to your Analytics account, Analytics generates the tracking code snippet that you need to add to the pages whose data you want to collect. You can use it as it or you can customize it to collect additional data.

To set up your Analytics tag, you need to find the Google Analytics ID for your property that was mentioned above. To do that:
1. Log into your account and click on Admin
2. Select the correct Account
3. Select the correct Property
4. Under Property click on Tracking Info
5. Your ID will be at the top under Tracking Code

Once you have your ID, you will paste this tag right AFTER the <head> tag on each page of your site and replace YOUR_GA_ID with your ID you just grabbed.

```
<!-- Global Site Tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'YOUR_GA_ID');
</script>
```

Now that you have GA set up, it is time to add GA Events. Events are used to collect data about interactions with your content. An event goal is a goal you define that identifies a specific event as a conversion. Events have each of the following components:
1. Category - used to group objects
2. Action - used to name the type of event or interaction you want to measure, the action name can be anything you choose.
* all actions are listed independently from parent categories
* a unique event is determined by a unique action name
* try choosing action names that relate to your data categories
* the 'action' doesn't always need to be an action word
3. Label (optional) - provides additional information for events you want to categorize
4. Value (optional) -  a number used to assign a numeric value to a page object

ex: Category: "Videos"
       Action: "Play"
			 Label: "Baby Monkey"

A unique event is an interaction with content by a single user within a single session that can be tracked separately from pageviews or screen views -- it only counts an event with the same category/action/label the first time in one session, total Events metric counts all the events.

To get started with measurement of GA Events, you can use the gtag.js event command, on a web page where the global site tag has been added, with the following syntax.

```
gtag('event', <action>, {
     'event_category' : <category>,
		 'event_label' : <lablel>,
		 'value' : <value>
 });
```
