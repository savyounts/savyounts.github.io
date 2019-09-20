---
title: "Google Optimize"
date: "2019-07-27"
tags: "blog"
---

Google Optimize allows you to test variants of web pages to see how they perform against an objective that you specify. It shows you which site experiences engage your customers and gives you solutions on how to accomplish that.

To get started you first need to:
1. [Set up Optimize](https://support.google.com/optimize/answer/6211921)
2. [Add Optimize to you website](https://support.google.com/optimize/answer/7513085)
3. Create your first experiment

# Experiences, tests and personalizations
Experiences are website customizations made to achieve a desired goal. In Optimize, experiences can either be tests or personalizations.

A test consists of variants of your web page that you wish to measure against your original page to determine which is the most effective at achieving your objective. Types of tests include A/B, redirect, and multivariate tests. They are measured based on objectives and run for a maximum of 90 days.

Personalizations are a set of changes made to your website for a specific group of visitors, they can run forever and don't have variants. They are a single set of changes served to anyone meeting targeting conditions.

Targeting is only available in Optimize 360. It allows you to choose who is eligible to be in your experiment and when they are served experiment variants. Some targeting variables are geo targeting, behavior targeting, technology targeting and audience targeting.

# Types of Experiences
**A/B Test**
This is a randomized experiment using 2 or more variants of the same web page. Each variant is served at similar times to avoid external factors. You can limit your experiment to a specific audience with targeting. To create an A/B test, follow [this](https://support.google.com/optimize/answer/6211930) guide.

**Redirect Test (aka split URL test**
The redirect test is an A/B test that allows you to test separate web pages against each other, you can test different URLs or paths instead of elements. This is useful when you want to test 2 different landing pages. To create a Redirect test, follow [this](https://support.google.com/optimize/answer/6361119?hl=en&ref_topic=6197696) guide.

**Multivariate Test**
Multivariate tests will test 2 or more elements simultaneously to see which combination is best. Instead of showing which page variant is most effective, it identifies the most effective variant of each element as well as analyzing the interactions between those elements. To create a Multivariate test, follow [this](https://support.google.com/optimize/answer/6370723?hl=en&ref_topic=6197696#) guide.

# Scheduling Experiments
You can schedule start and end times so they work best for your business and you should run tests for a minimum of 2 weeks. After starting an experiment, you can edit the schedule or cancel the experiment. Tests should be run until at least one of your variants has a 95% probability to beat baseline. This means that the conversion rate of the variant is better than the conversion rate of the original.

# Objectives
Objectives are the metrics or activities that your variants are measured against and is the functionality you wish to optimize. To configure objectives, you need your website to have the Optimize Plugin installed. There are three types of Objectives: System objectives, Analytic objectives, and custom objectives.

**System Objectives**
System objectives are available in all experiments and are common objectives that are often used in experiments. System objectives include:
* Page Views - total number of pages viewed
* Session duration - length of a session in seconds
* Bounces - the number of single-page visits
* Transactions - total number of completed purchases
* Revenue - total revenue from web ecommerce or in-app transactions
* AdSense impressions - reported when an individual ad is displayed on your website
* AdSense Ads Clicked - the number of times AdSense ads were clicked
* AdSense revenue - estimated revenue from AdSense ads

**Analytics Goals**
These are goals linked from your Google Analytics views that are imported into Optimize for use as experiment objectives. To see detailed Analytics goals you need at least Read & Analyze permissions on the linked Analytics view. You can still use the goals without those permissions, but you will only have limited info on each goal.

**Custom Objectives**
You can also create custom objectives. There are two custom objective types:
1. Events Objective - analytics metrics that track user interactions (or "events") independent of pageviews. Event objectives must include one of the following variables:
 * Event Category
 * Event Action
 * Event Label
 * Event Value

2. Pageviews Objective - the number of pageviews for a particular web page.

When creating a custom objective you must choose a variable, a match type, a value and a counting method. Additionally, you may optionally choose to create additional rules. Match types include equals, starts with, regex, greater than and less than. Match types are also case sensitive. Additional rules can be created with the AND operator. When creating your custom objective, you must choose a counting method which is "once per session" or "many per session".  Lastly, when creating the custom objective, the value you provide must match the values in your linked analytics view.

# Variant Weighting
Variant weighting allows you to manage the proportion of traffic that goes to each variant. By default, all variants are weighted equally. Once you find a leader for your variants, you can direct all users to that variant by setting it to 100%. This allows you to deploy the leader immediately without having to wait on development resources, this is not intended to be permanent.

# Activation Events
Dynamic pages and SPAs typically load additional data after the initial page load, activation events enable experiments to work on dynamics subsections of SPAs. You can continuously instrument new experiments by leveraging a combination of events and additional targeting rules without having to change your site's client side code. If you active an experiment on a custom event, it will not run until a dataLayer event with the provided event name is fired. You will need to run the following JavaScript when your page is at the correct state:
```
dataLayer.push({ 'event' : 'customEventName' });
```

# Multipage Experience
Multipage experiences allow you to span tests and experiments across your website. Multipage experiments and personalizations can be used any time you need to show a set of changes to visitors who are in a variant or personalization.
