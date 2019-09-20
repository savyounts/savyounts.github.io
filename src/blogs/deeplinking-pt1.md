---
title: "Deeplinking Part 1(iOS Universal Links)"
date: "2019-04-10"
tags: "blog"
---

Deep linking for mobile apps uses uniform resource identifiers (URIs) that link to specific locations within a mobile app. Typically, when a mobile user clicks a link to a website, the website opens in a browser. Mobile app deep linking allows a corresponding iOS/Android native app to open instead of the browser.

To implement deep linking, Apple uses *Universal Links* and Google uses *App Links*.  In some cases, you may want the app to open whenever a user tries to open your website through a browser or other link on their mobile device. Usually, you only want it to happen with specific pages. To do this, you will need to determine the paths of those pages. If I have a website that displays articles, then I may want to include only links with /articles/ in them.  ex: www.mycoolwebsite.com/articles/1

Once we've decided which paths to deep link, it time to start with our iOS Universal Links.

Preparing your **Website**:
At the root of your WEBSITE (not mobile app), create a .well-known directory and inside that, create a file called 'apple-app-site-association'. There should not be an extension on this file. You can define several apps in this file and iOS will follow the app order when looking for a match so you can specify different apps to handle different paths on your website.

Here is what your apple-app-site-association file should look like:

```
{
    "applinks": {
        "apps": [],
        "details": [
            {
                "appID": "LKMSEFAUWJ.com.my.bundle.id",
                "paths": [ "/columns/*", "/features/*", "/articles/*" ]
            },
						{
                "appID": "TeamID2.BundleID2",
                "paths": [ "/columns/*", "/features/*", "/articles/*" ]
            },
        ]
    }
}

```

In the example above, I have defined two different apps. The 'apps' key must be present and its value should be an empty array. Each app you define should have an appID and the paths that it should link to.  Your appID is made up of your TeamID and your BundleID connected with a period.

To find your TeamID, you need to log into your Apple Developer Portal. Go to "Membership" and you should see your TeamID displayed. To find your appID go to "Certificates, IDs & Profiles", under "Identifiers" click "App IDs", and it should be displayed there for you.

After you have added your appID you should fill in the paths you want to link to. If you want all links to your website to open your app, you can just use a wildcard symbol " * ", otherwise, you will need to add all the unique path patterns you want.

Once you have finished your apple-app-site-association file, it is time to jump back into your Apple Developer Portal and create a new provisioning profile. According to Apple, a provisioning profile is a collection of digital entities that uniquely ties developers and devices to an authorized iPhone Development Team and enables a device to be used for testing.

Go back to your App IDs under "Certificates, Identifiers & Profiles", click on your app and make sure you enable "Associated Domains". Once you've done this, generate your provisioning files for your app, download them and then install them to Xcode.

Speaking of which, let's continue on to configuring our app in Xcode.
Go ahead and open up your app in Xcode. Install the new provision files if you haven't already and then venture over to the "Capabilities" tab that is along the top. Once there make sure you enable "Associated Domains" here too. Then, make sure you click on the arrow next to Associated Domains so more options open up. You will see a box where you can add domains. Go ahead and add all domains that will be supported by your app, but make sure you prefix them with applinks:

`applinks:www.mydomain.com`

Make sure you also add any subdomains.

You may have noticed, we've only actually touched our app through Xcode, we haven't touched our codebase yet. Don't worry I'll cover that in Part 2. But first, a recap:

1. Create an apple-app-site-association (AASA) file in a .well-known directory inside the root of your WEBSITE (not your app)
 * This is a file that lives in your website and associates your website domain with your native app -- it proves domain ownership to iOS. you should be able to see it now at https://<<yourdomain>>/.well-known/apple-app-site-association
 * Your AASA file needs to be served over HTTPS and should not have an appended .json extension
 * The "apps" key must always be present and will always be empty
 * Your "paths" key should be an array of strings -- you can also use NOT before a path to exclude it if that is easier than including all of the paths you do want

2. Go into your Apple Developer Portal, enable Associated Domains, create a provisioning profile and install in it Xcode
 * This is done so you can test your deep links

3. Open up your app in Xcode, enable Associated Domains here too and then add the domains you want to associate with your app.
 * We're not in our codebase yet, but we are now working on connecting our website to our app. This is where we tell our app which domains to associate itself with. Make sure you add all domains and subdomains that your app should be aware of.
