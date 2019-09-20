---
title: "Deeplinking Part 2(iOS Configuration)"
date: "2019-04-15"
tags: "blog"
---

In my last post, we went over how to set up Universal Links to allow deep linking in iOS but we never dug into our app's codebase. Now we are going to dive into some of the configurations for iOS to enable deep linking. To do this, we are going to open up your app's codebase and jump into a file called the AppDelegate.m. So what is this file?

When you create an Xcode project, it automatically creates two classes for you; one called AppDelegate and one called ViewController. The AppDelegate is the entry point to your application from the outside world. It works with the ViewController when the app is launched and the ViewController is responsible for setting up the view.

First things first, below your last import statement in your AppDelegate.m add in RCTLinkingManager.

```
#import <React/RCTLinkingManager.h>
```

And below that paste this into your file:

```
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
{
  return [RCTLinkingManager application:application openURL:url
                      sourceApplication:sourceApplication annotation:annotation];
}

// Only if your app is using [Universal Links](https://developer.apple.com/library/prerelease/ios/documentation/General/Conceptual/AppSearch/UniversalLinks.html).
- (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity
 restorationHandler:(void (^)(NSArray * _Nullable))restorationHandler
{
 return [RCTLinkingManager application:application
                  continueUserActivity:userActivity
                    restorationHandler:restorationHandler];
}
```

When a user clicks on a universal link, iOS will launch your app and the method `application:continueUserActivity:restorationHandler` will get called in AppDelegate.m. It will be passed an NSUserActivity object with the webpageURL that the user is trying to access.

`application:continueUserActivity:restorationHandler`  tells the delegate that the data for continuing an activity is available and the NSUserActivity is a representation of the state of your app at a moment in time.

So now, our AppDelegate.m knows what to do with Universal links. Great, go try it out.
You'll see that when you click on a Universal link your app launches, but you'll also notice, it doesn't quite open up to the exact page you were hoping for. Lastly, to get our iOS deep linking to work we need to tell our app how to handle these different URLs.

But before we do that, in my next post, I'm going to switch gears and get our Android side up to speed.
