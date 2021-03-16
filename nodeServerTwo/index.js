const express = require('express');
const app = express();
const bodyparser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
const port = process.env.PORT || 8081;

app.use(bodyparser.urlencoded({extended: true}));

app.use(cookieParser());

app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000,
        token:"asassdffdgdfghsdfhfd"
    }
}));

var sessionChecker = (req, res, next) => {
    console.log(req.session , req.cookies);
    if (req.session.user && req.cookies.user_sid) {
        res.json({
            status: 0,
            msg: "session has been expired"
        })
    } else {
        next();
    }    
};

app.get('/demo', sessionChecker, function(req, res){
    return res.json({
        message: 'hello world',
        dateTime: Date.now(),
        session: req.session,
        cookie: req.cookies
    });
});

app.listen(port,()=>{
    console.log("Connection has been published on port " +port);
})