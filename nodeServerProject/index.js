const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const port = process.env.PORT || 8080;

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.use(express.static('angularProject'));

app.listen(port,()=>{
    console.log("Connection has been published on port " +port);
})