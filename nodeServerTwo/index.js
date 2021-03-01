const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const { json } = require('body-parser');
const port = process.env.PORT || 8081;

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.get('/demo',  function(req, res){
    return res.json({
        message: 'hello world',
        dateTime: Date.now()
    });
});

app.listen(port,()=>{
    console.log("Connection has been published on port " +port);
})