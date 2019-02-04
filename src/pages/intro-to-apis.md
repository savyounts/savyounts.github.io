---
title: "Intro To APIs"
date:
---

A little over a year ago I was applying for a non-technical job at [Zapier](https://zapier.com/), one of the requirements for the job was to understand APIs. What they are, how they work, how to talk-the-talk if not also walk-the-walk. I had absolutely no clue what an API was. So I did what any Millennial today would do and took to the Internet. I spent several days going through this big [tutorial ](https://zapier.com/learn/apis/)(that Zapier had actually created) learning what an API was. In the end, I felt like I knew barely more than I had when I started.

![](https://www.lovequotesmessages.com/wp-content/uploads/2018/04/military_hat_confused_meme1.jpg)

Fast-forward 8 months or so and APIs come up again. This time I am about half way through my Full Stack course at [Flatiron school](https://flatironschool.com/?utm_source=Google&utm_medium=ppc&utm_campaign=CMGN-508--CT-2ACQ&utm_content=CL-1USA--PLC-2BRD--PN-2OSE--ATY-19TAD--AUD-311--ADSG-124----OFR-5DOTHOME--TST-14--&utm_term=flatiron%20school&uqaid=recL70WzHBWZw0LZO&utm_term=flatiron%20school&utm_campaign=Search%2520%257C%2520Brand&utm_source=google&utm_medium=cpc&hsa_net=adwords&hsa_tgt=kwd-309054304979&hsa_ad=313341753335&hsa_acc=7727937261&hsa_grp=31097514251&hsa_mt=e&hsa_cam=420358091&hsa_kw=flatiron%20school&hsa_ver=3&hsa_src=g&gclid=CjwKCAiA99vhBRBnEiwAwpk-uLfOsZPrtgjBj4KfX9pNBzeVUbz1EpG_VRYMUXweK2Hbkpzc2WDh0RoCRXYQAvD_BwE), so I have a much better idea of why APIs might exist and why they might be used. So, in case you are more on the same page as pre-Flatiron Savannah,

> An API (Application Programming Interface) is a way for one system to interact with another via a well-defined interface. An interface is any endpoint that can be used to take actions and consume data on a given application.


Yeah, yeah, cool but what does that mean? What is an endpoint??
An endpoint is simply a unique URL that represents an object or collection of objects (aka data you may want to use or need to access for your application). Sometimes an application may know that their data may be useful to other applications and may provide an API as well as the standard web interface. So if I want to create an app that finds a coffee shop nearby that isn't super busy, I can connect to Foursquare's API which can help tell me what coffee shops are close and how many people have recently gone there.

A good API has 4 main traits:
*  It should be predictable and consistent - the code should be reusable for endpoints
*  It should be static - they should not change in a breaking way
*  It should be simple and clear - an api call should return exactly what is expected
*  It should be flexible - your api should be easy to scale and maintain

At the end of the day, a good API just provides data in the easiest format possible for code to digest.

Whereas a web interface returns HTML for your browser to read, APIs typically return JSON to describe and define data. So if reaching out to the Foursquare API to find a coffee shop nearby, a snippet of that data returned to me may look something like this

```
{
  "name": "Novo's Coffee",
  "address": "123 Glenarm St.",
  "city": "Denver",
  "state": "Colorado",
  "zip": "12345"
}
```

This provides an easy (easier) way to cipher through data to find the exact info you need than if you had to scrape information from Foursquare's app and then search through different HTML tags to eventually find what you are looking for.

Most good APIs will have extensive documentation about how to use the API, what functions are available, and what data you can access. Most good APIs also follow a REST format, so finding your way around them should start to click once you have used a few.

RubyOnRails is a great framework for creating an API. Rails 5 introduced an API mode that is a bootstrapped skeleton for api only apps. It's super simple and easy to set up, read here to learn how.

Although APIs may seem big and scary at first, they really are such great tools to work with once you have an understanding for what they are. APIs help you to easily access information in your frontend client app or use other app's information within your own to make it even better.

![](https://lh4.googleusercontent.com/p1iG-c63z_dFYvsulzwfi_Rqap_fvqa6kxew1MbtmORQ2Qvt21RoLB72FB81U5sHwgfE15PkGpjoU-But3oFBCdhCqRrxhniQT7ug_CkRovGm-ykcFW-raQAWQ2SkYkh_XiLmKDN)
