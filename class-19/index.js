const express = require('express');
const app = express();
const port = 5000;


app.use("/home", require("./routes/userRouters"))

app.listen(port, () => {
    console.log('server is runing', port);
})