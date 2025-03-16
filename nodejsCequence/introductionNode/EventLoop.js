// setTimeout & clearTimeout
const time = setTimeout(() => {
    console.log('This code run after 3 second');
}, 5000);
// clearTimeout(time);




// setInterval & clearInterval
const interval = setInterval(() => {
    console.log('This code run every 1 second');
}, 1000);
setTimeout(() => {
    clearInterval(interval)
}, 5000);



// setImmediate & clearImmediate
const immediate = setImmediate(() => {
    console.log('Executed Immeditaley after the current event loop');
});
// clearImmediate(immediate);



