// let math = require('./index2');
// console.log(math.hello1(100, 200), math.hello2(100, 200));


let { hello1, hello2, hello3, hello4 } = require('./index2')
console.log(hello1(100, 200), hello2(200, 100), hello3(20, 10), hello4(200, 10));
