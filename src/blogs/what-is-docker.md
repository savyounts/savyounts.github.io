---
title: "What is Docker?"
date: "2018-11-30"
tags: "blog"
---

As I have come to the end of my Flatiron Web Development course I've slowly been starting the long, painful process of job searching. Throughout my search, I have come across many job descriptions that ask for experience with Docker, which led me to the question -- What the heck is Docker?

I figured instead of continuing to read about how it was required by these companies and continuing to ask myself that same question, I should probably just look it up -- so here is what I found.

**What is our end goal here?**
 The goal of Docker is to make it really easy and straightforward to install and run software on any computer.

 Many times we will download an installer, run that installer and then come across an error message during the installation. Then it is a matter of troubleshooting until you can get everything up and running.

After all of this troubleshooting, as soon as you move to a new environment, you have to redo it.

With Docker, you can run one command in your command line and almost instantly have an instance of the software you are wanting to use up and running on your computer.

**Ok, ok, but how does this work?**
To start off, when someone refers to "Docker", they are actually making a reference to a whole collection of different projects, tools and pieces of software. All of these different pieces come together to form a platform around creating and running containers.
Wait.. what is a container?? Hold on, we'll get there.  

When you run a docker command in your terminal, something called the Docker CLI reaches out to the Docker Hub which then downloads a single file called an Image.

**An Image is a single file containing all the dependencies and all the configuration required to run a very specific program**

Now back to those containers...

When the image gets downloaded, it is stored on your hard drive at some point in time and is used to create a container.

**A container is just an instance of an image, but can be thought of as being like a running program.**

So a container is a program with its own isolated set of hardware resources. Images and Containers are the backbone of what you will be working with throughout the use of Docker.

With Docker, you can treat containers like very lightweight, virtual machines. You can create, deploy, copy and move them from environment to environment so that you don't have that old issue of installing and reinstalling software.

When we run our docker commands in the terminal, we want to start up a new container using the image we are going to download.

Once you have downloaded an image, the next time you run that same command, it won't be downloaded again, instead, behind the scenes, your Docker Server will check in something called the Image Cache to see if its there. Since it is, Docker will skip the download step and run that container.

Your container is really just a process or set of processes that has group of resources specifically assigned to it.

Docker is a great tool because it allows you to wrangle dependencies, this way you can use the same software on different computers and get the same results without having to worry about having different operating systems or different versions of any other dependencies.
