# Learn NodeJS with Pritam

Happy Coding

What is Node.js🔃

Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project! Node.js runs the V8 JavaScript engine, Google Chrome's core, outside the browser. This allows Node.js to be very performant. A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.


Why Node.js🔃

Node.js is a cross-platform runtime, perfect for a wide range of use cases. Its huge community makes it easy to get started. It uses the V8 engine to compile JavaScript and runs at lightning-fast speeds. Node.js applications are very scalable and maintainable. Cross-platform support allows the creation of all kinds of applications - desktop apps, software as a service, and even mobile applications. Node.js is perfect for data-intensive and real-time applications since it uses an event-driven, non-blocking I/O model, making it lightweight and efficient. With such a huge community, a vast collection of Node.js packages is available to simplify and boost development.


Running Node.js Code🚀

The usual way to run a Node.js program is to run the globally available node command (once you install Node.js) and pass the name of the file you want to execute.

Global Install vs Local Install🚀

NodeJS and NPM allow two methods of installing dependencies/packages: Local and Global. This is mainly used when adding a package or dependency as part of a specific project you're working on. The package would be installed (with its dependencies) in node_modules folder under your project. In addition, in package.json file there will be a new line added for the installed dependency under the label dependencies. At this point - you can start using the package in your NodeJS code by importing the package. Unlike the local install, you can install packages and dependencies globally. This would install it in a system path, and these packages would be available to any program which runs on this specific computer. This method is often used for installing command line tools (for example, even npm program is a Globally installed npm package).

npx🚀

npx is a very powerful command that's been available in npm starting version 5.2, released in July 2017. If you don't want to install npm, you can install npx as a standalone package. npx lets you run code built with Node.js and published through the npm registry.

npm🚀

npm is the standard package manager for Node.js.

It is two things: first and foremost, it is an online repository for the publishing of open-source Node.js projects; second, it is a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management. A plethora of Node.js libraries and applications are published on npm, and many more are added every day

What Is Error Handling in Node.js🔃

I’ve heard a ton of my fellow developers say error handling in Node.js is way too hard. Well, I can’t lie. It’s not easy. But, I have to be fair and say it’s not that hard either once you set up centralized error handling.

What is an error anyhow? It’s a way to see bugs in your code. Following this logic, error handling is a way to find these bugs and solve them as quickly as humanly possible.

From this explanation, it’s obvious the hard part is setting up a good base for your error handling. It’s all about keeping you sane at the end of the day. Handling errors properly means developing a robust codebase and reducing development time by finding bugs and errors easily.

Types of Errors: Operational vs. Programmer Errors 🔃

Operational Errors🔃

Operational errors represent runtime problems. These errors are expected in the Node.js runtime and should be dealt with in a proper way. This does not mean the application itself has bugs. It means they need to be handled properly. Here’s a list of common operational errors:

❌failed to connect to server
❌failed to resolve hostname
❌invalid user input
❌request timeout
❌server returned a 500 response
❌socket hang-up
❌system is out of memory

Programmer Errors🔃

Programmer errors are what we call bugs. They represent issues in the code itself. Here’s a common one for Node.js, when you try reading a property of an undefined object. It’s a classic case of programmer error. Here are a few more:

❌called an asynchronous function without a callback
❌did not resolve a promise
❌did not catch a rejected promise
❌passed a string where an object was expected
❌passed an object where a string was expected
❌passed incorrect parameters in a function

Uncaught Exceptions🔃

When a JavaScript error is not properly handled, an uncaughtException is emitted. These suggest the programmer has made an error, and they should be treated with the utmost priority.

The correct use of uncaughtException is to perform synchronous cleanup of allocated resources (e.g. file descriptors, handles, etc) before shutting down the process. It is not safe to resume normal operation after uncaughtException because system becomes corrupted. The best way is to let the application crash, log the error and then restart the process automatically using nodemon or pm2.

Nodejs async programming🔃

Asynchronous code means that things can happen independently of the main program flow, async functions in JavaScript are processed in the background without blocking other requests. It ensures non-blocking code execution. Asynchronous code executes without having any dependency and no order. This improves the system efficiency and throughput. Making web apps requires knowledge of asynchronous concepts since we will be dealing with actions that require some time to get processed.

Event Emitter🔃

In Node.js, an event can be described simply as a string with a corresponding callback. An event can be "emitted" (or, in other words, the corresponding callback be called) multiple times or you can choose to only listen for the first time it is emitted.

Event Loop🔃

The Event Loop is one of the most critical aspects of Node.js. Why is this so important? Because it explains how Node.js can be asynchronous and have non-blocking I/O, it explains the "killer feature" of Node.js, which made it this successful.

Promises🔃

A promise is commonly defined as a proxy for a value that will eventually become available Asynchronous functions use promise behind the scenes, so understanding how promises work is fundamental to understanding how "async" and "await" works. Once a promise has been called, it will start in a pending state. This means that the calling function continues executing, while the promise is pending until it resolves, giving the calling function whatever data was being requested.

Creating a Promise: The Promise API exposes a Promise constructor, which you initialize using newPromise().

Using resolve() and reject(), we can communicate back to the caller what the resulting Promise state was, and what to do with it.

Async/Await🔃

Async/Await is a special syntax to work with promises in a more comfortable fashion. It's easy to understand and use. Adding the keyword async before a function ensures that the function returns a promise and the keyword await makes JavaScript wait until that promise settles and returns the result.

Callbacks🚀

Node.js, being an asynchronous platform, doesn't wait around for things like file I/O to finish - Node.js uses callbacks. A callback is a function called at the completion of a given task; this prevents any blocking, and allows other code to be run in the meantime.

Fastify🚀

Fastify is a web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture, inspired by Hapi and Express.

NestJS🚀

NestJS is a progressive Node.js framework for creating efficient and scalable server-side applications.

Express.js🚀

Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.Express was developed by TJ Holowaychuk and is now maintained by Node.js foundation and open source developers.

Http module🚀

To make HTTP requests in Node.js, there is a built-in module HTTP in Node.js to transfer data over the HTTP. To use the HTTP server in node, we need to require the HTTP module using require() method. The HTTP module creates an HTTP server that listens to server ports and gives a response back to the client.

Nodemon🚀

In Node.js, you need to restart the process to make changes take effect. This adds an extra step to your workflow. You can eliminate this extra step by using nodemon or PM2 to restart the process automatically.

nodemon is a command-line interface (CLI) utility developed by @rem that wraps your Node app, watches the file system, and automatically restarts the process.

EJS🚀

EJS is a templating language or engine that allows you to generate HTML markup with pure JavaScript. And this is what makes it perfect for Nodejs applications. In simple words, the EJS template engine helps to easily embed JavaScript into your HTML template.

Pug🚀

Pug is a JavaScript template engine. It is a high-performance template engine heavily influenced by Haml and implemented with JavaScript for Node.js and browsers. Pug was formerly called Jade.

Pug is a high-performance template engine heavily influenced by Haml and implemented with JavaScript for Node.js and browsers

Marko🚀

Marko is a fast and lightweight HTML-based templating engine that compiles templates to CommonJS modules and supports streaming, async rendering, and custom tags. It is HTML re-imagined as a language for building dynamic and reactive user interfaces.
