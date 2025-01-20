// 01. Globle
global.ver = "hello world"; // global variable
console.log(global.ver);

// 02. __dirname
console.log(__dirname);  // path 

// 03. __filename
console.log(__filename); // path and file name

// 04. process
console.log(process.version); // node version
console.log(process.platform); // platform name

// 05. console
console.log("hello,node.js!"); // hello,node.js!
console.error("An Error Occurred"); // print error

// 06. setTimeout and clearTimeout
const time = setTimeout(() => {
    console.log("This runs affter 2 seconds"); // print this code affter 2 seconds
}, 2000);
// console.log(time);

// 07. setInterval and clearInterval
const interval = setInterval(() => {
    console.log("This runs every 1 second");
}, 1000);
setTimeout(() => clearInterval(interval), 6000); // stop after 5 second this code 

// 08. setImmediate and clearImmediate
const immediate = setImmediate(() => {
    console.log("Executed immediately after the current event loop.");
});
clearImmediate(immediate);

// 09. require
const fs = require("fs"); // file system module 
// console.log(fs);
// fs.writeFileSync("Example.txt", "Hello, Node.js"); // create new file Example.txt

// 10. module
console.log(module.exports); // The export of the current module and return blank object

// 11. exports
exports.greet = () => {
    console.log("Hello from exports");
}

// 12. buffer
const buffer = Buffer.from("Hello Buffer");
console.log(buffer.toString()); // print to hello buffer

// 13. URL
const myURL = new URL("https://example.com?name=yugal");
console.log(myURL.searchParams.get("name")); // print yugal

// 14. TextDecoder and TextEnCoder
const enCoder = new TextEncoder();
const enCoded = enCoder.encode("Hello");
const deCoder = new TextDecoder();
console.log(deCoder.decode(enCoded)); // print hello
