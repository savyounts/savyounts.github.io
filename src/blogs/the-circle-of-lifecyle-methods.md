---
title: "The Circle of Life(cycle) Methods"
date: "2018-12-16"
tags: "blog"
---

![](https://media1.tenor.com/images/f36e795129d68eabc7336f69e142e7db/tenor.gif?itemid=9789392)

The React framework was designed to enable developers to create complex and highly reactive UIs. To enable this, React Components go through a component lifecycle -- Creation, Updating and Deletion. Each phase is made of of several built-in events called lifecycle hooks or methods. The only method that is** required** for a React Component to be valid is `render()` and we'll see how it comes into play for each of these different phases of life.

First is the **Pre-Mounting** Phase.

It is important to remember that beneath all the React magic, at their very core, components are just JS classes. This means that before mounting(rendering) begins, the component's constructor function is called. This is a great time for setting an initial state.

Next we have the **Mounting** Phase.

Once a component is created, it is then mounted (or rendered) to the DOM. At this stage there are two lifecycle hooks, `static getDerivedStateFromProps()` and `componentDidMount()`.

* `static getDerivedStateFromProps() `is the only lifecycle method that gets called *before* `render()` during mounting. This method gives access to any props and state allowing you to modify them before the render. This method is very rarely used and it's best advised to leave it alone except for special use cases. From the React blog ...
> "getDerivedStateFromProps exists for only one purpose. It enables a component to update its internal state as the result of changes in props... We did not provide many examples, because as a general rule, derived state should be used sparingly."

* Next, `render() `is called.
* `componentDidMount()` is called right after the `render()` and is often used to set up long-running process like fetching and updating data. One reason it is called after `render()` is because it's better to show the user *something* rather than nothing while waiting for data to load, once `componentDidMount()` has fetched any data it needs, it will re-render with that content.

After a component is Mounted, it can enter the **Updating** Phase.

Every time a component's state or props change, it gets re-rendered which triggers several lifecycle hooks.

![](https://images-na.ssl-images-amazon.com/images/I/51kQ11B2CuL.jpg)

Just kidding, they really aren't that bad, but there is a bit more that goes on in an update than when a component initially mounts and remember, this happens with *every* little change.

* `static getDerivedStateFromProps() `. This looks familiar, and it's pretty much the same thing all over again, this is called before `render()` again and I still wouldn't recommend messing with it very often.
* `shouldComponentUpdate()` is also called before `render()` in the Update Phase. This method is used to compare old and new props and state to prevent any unnecessary re-renders. It returns as a boolean;  true means re-render and false will prevent any unnecessary re-renders.
* If `shouldComponentUpdate()` returns true, our component now renders again.
* `getSnapshotBeforeUpdate()` is fired after render but riiiiiiight before it commits the update from the virtual DOM to the actual DOM. This is currently used to capture any information that may have changed since the update (like mouse position). This method will either return null or will pass a value to our last method...
* `componentDidUpdate()` is also one not used very often, but it has access to the previous props, the new props and any value sent from the snapshot. One reason it may be used is to send information to update a 3rd party library.

And lastly, our final component lifecycle phase, **UnMounting**.

In this last phase, our component gets deleted and cleared from our DOM. There is only one lifecycle method called in this phase.
* `componentWillUnmount()` is called just before deletion and is used to clear anything that was set up in `componentDidMount()`

> Rule of thumb, don't write any lifecycle methods as arrow functions. We need them to exist in the prototype chain of the JS class

![](https://thumbs.gfycat.com/MildAdorableIbis-small.gif)


Well, at least for our lifecycle methods. But, you'll have to put up with me just a bit longer. One more thing that should be mentioned is that there are different types of components and not all of them have all of these methods. Everything we talked about above is true for a `React.Component`.  For optimizing your updates, you can also use a `React.PureComponent`.
> "If your React component’s render() function renders the same result given the same props and state, you can use React.PureComponent for a performance boost in some cases."

A Pure Component does not have a `shouldComponentUpdate()` method, this is because it already won't re-render something that has the same state and props as before. Unless you need any customized logic for when you should update your component, Pure Components may be the way to go.

Phew.. ok, we've made it, the LAST part.

Functional Components.
If you have a component that has no need for state or lifecycle methods, you can avoid all of these by using a functional component.  Functional Components just return JSX instead of using render() and does not extend Component, it's just a normal JS function. Props must be passed in explicitly if you need to use them, but these are great for just displaying content.

![](https://66.media.tumblr.com/a5e2276329e08b6b1161b3daa4e51f66/tumblr_o3sp3xrZsM1s01qkyo1_400.gif)

JK, that's really all I have for you. K bye.
