// Define the function
function fun1() {
    let variable = "hello world 1";
    console.log(variable);
}
// call the function
fun1();

// passing the argument
// satting default value
function fun2(a, b = 10) {
    let variable = "hello world "
    console.log(variable, a, b);
}
fun2(2);

// multiple return array and object
function fun3(a, b) {
    let variable1 = a + b;
    let variable2 = a - b;
    let variable3 = a * b;
    let variable4 = a / b;
    // return [variable1, variable2, variable3, variable4];
    return { ver1: variable1, ver2: variable2, ver3: variable3, ver4: variable4 };
}
// call the function
let result = fun3(20, 10);
// console.log(result[0], result[1], result[2], result[3]);
console.log(result.ver1, result.ver2, result.ver3, result.ver4);