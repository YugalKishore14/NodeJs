# What is Node.js

- Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser. It is built on Chrome’s V8 JavaScript engine and is used to create scalable and high-performance applications, especially for backend development.

## Key Features of Node.js:

- Asynchronous & Non-blocking – Uses an event-driven architecture for handling multiple requests efficiently.

- Single-threaded – Uses a single-threaded model with event looping, making it lightweight and efficient.

- Fast Execution – Runs on the V8 engine, which compiles JavaScript to machine code for fast execution.

- Cross-platform – Works on Windows, macOS, and Linux.

- NPM (Node Package Manager) – Comes with a vast ecosystem of open-source packages.

## Common Uses of Node.js:

- Building APIs and RESTful services

- Real-time applications (e.g., chat apps, live streaming)

- Microservices architecture

- Server-side rendering

- IoT applications

# A wold on event loop

- The event loop is a fundamental part of Node.js that enables non-blocking, asynchronous programming. It allows Node.js to handle multiple operations efficiently on a single thread, making it lightweight and scalable.

## How the Event Loop Works:

- Call Stack – Executes synchronous code line by line.

- Node APIs – If an asynchronous operation (like file reading or database query) is encountered, it is delegated to Node.js APIs.

- Callback Queue – Once the operation completes, the callback function is pushed into the callback queue.

- Event Loop – Constantly checks if the call stack is empty. If it is, it takes a callback from the queue and pushes it to the stack for execution.

- Execution Continues – The cycle repeats, ensuring smooth async execution.

## Phases of the Event Loop:

- Timers Phase – Executes callbacks from setTimeout() and setInterval().

- I/O Callbacks Phase – Handles network & disk I/O callbacks.

- Idle, Prepare Phase – Internal operations (used by Node.js).

- Poll Phase – Fetches new I/O events, executes callbacks, and handles network requests.

- Check Phase – Executes callbacks from setImmediate().

- Close Callbacks Phase – Runs clean-up callbacks like socket.on('close', …).

# Example of Event Loop

```
console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 0);

setImmediate(() => {
  console.log("Inside setImmediate");
});

process.nextTick(() => {
  console.log("Inside process.nextTick");
});

console.log("End");

```

### Output:

```
Start
End
Inside process.nextTick
Inside setTimeout
Inside setImmediate
```

# Event driven architecture

## Event-Driven Architecture (EDA) in Node.js

- Event-Driven Architecture (EDA) is a design pattern in which the flow of a program is determined by events such as user actions, sensor outputs, or messages from other programs. Instead of executing tasks sequentially, EDA listens for events and responds when they occur.

## How Event-Driven Architecture Works in Node.js

- Node.js uses the event-driven, non-blocking I/O model, where events and listeners play a key role. The core of this system is the EventEmitter class in the events module.
- An event occurs (e.g., a user clicks a button, a file is read, or a request is received).

- A callback (event handler) is registered to respond to the event.

- The event loop listens for events and triggers the appropriate handler when the event occurs.

# Example of Event-Driven

```
const EventEmitter = require('events');

// Create an event emitter instance
const myEmitter = new EventEmitter();

// Define an event listener
myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Emit (trigger) the event
myEmitter.emit('greet', 'Yugal');

```

### Output:

```
Hello, Yugal!
```

# Blocking Vs Non-Blocking Code

- Node.js is known for its non-blocking, asynchronous nature, which makes it efficient for handling multiple operations simultaneously. Let's break down the difference between blocking and non-blocking code.

## 1. Blocking Code (Synchronous)

- Executes sequentially – One operation must complete before the next one starts.

- Blocks the main thread – If a task takes time, it stops execution of further code until it completes.

- Slower for high-performance applications – Can cause performance issues in large-scale applications.

### Example: Blocking Code

```
const fs = require('fs');

console.log("Start");

// Reading a file synchronously (Blocking)
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);

console.log("End");
```

### Output:

```
Start
(file content)
End
```

## 2. Non-Blocking Code (Asynchronous)

- Does not block execution – The program moves to the next task while waiting for the operation to complete.

- Uses Callbacks, Promises, or Async/Await – Handles tasks efficiently.

- Ideal for high-performance applications – Works well for servers handling multiple requests.

### Example: Non-Blocking

```
const fs = require('fs');

console.log("Start");

// Reading a file asynchronously (Non-Blocking)
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

console.log("End");
```

### Output:

```
Start
End
(file content)
```

## Key Differences:

| Feature          | Blocking (Synchronous) | Non-Blocking (Asynchronous)                       |
| ---------------- | ---------------------- | ------------------------------------------------- |
| Execution        | Sequential             | Parallel                                          |
| Performance      | Slower                 | Faster                                            |
| Thread Blocking? | Yes                    | No                                                |
| Used for         | Small tasks            | I/O-heavy tasks (API calls, DB queries, File I/O) |

# Node.js Process Model

- Node.js follows a single-threaded, event-driven process model that efficiently handles multiple requests using the event loop and non-blocking I/O. Unlike traditional multi-threaded servers, Node.js operates on a single thread but can handle thousands of concurrent connections asynchronously.

## How the Node.js Process Model Works

### 1. Single Threaded

- Node.js runs on a single thread using the V8 JavaScript engine.

- It does not create new threads for each request, unlike multi-threaded architectures.

### 2. Event-Driven & Non-Blocking I/O

- Uses the event loop to handle multiple requests asynchronously.

- Long-running tasks (like file I/O, database queries) are offloaded to the worker threads in the background.

### 3. Worker Threads (for CPU-Intensive Tasks)

- Node.js uses a thread pool (via libuv) for CPU-bound operations.

- This helps prevent blocking the main thread.

## Diagram of the Node.js Process Model

```
Client Request  →  Event Loop (Main Thread)
                         |
            ---------------------------
            |         |         |
      Async I/O   Timer   Worker Thread
            |
    Callback Execution
            |
   Send Response to Client
```
