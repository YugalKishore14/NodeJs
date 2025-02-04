// const express = require('express');
// const app1 = express();
// const port1 = 5000;
// app1.get('/', (req, res) => {
//     res.send('server is run');
// })
// app1.listen(port1, () => {
//     console.log('server is run', port1);
// })



//  promise 

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve('data is run in three seconds later')
        } else {
            reject('data in not run')
        }
    }, 3000);
})

myPromise
    .then((message) => console.log(message))
    .catch((error) => console.log(error))