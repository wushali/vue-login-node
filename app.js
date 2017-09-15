var express = require('express');
var path = require('path');;
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cookieSession=require("cookie-session");
var index = require('./routes/index');
var users = require('./routes/users');
var reg =require("./routes/reg")
var login =require("./routes/login")
var only=require("./routes/only");
var clear=require("./routes/clear");
var app = express();
var cors= require('cors');
var app = express();
app.use(cookieSession({
  name:'mysession',
  maxAge:1000*360*24*7,
  keys:['aa','bbb']
}));
app.use(cors({
  "origin": ['http://localhost:8080'],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders:['Content-Type', 'Authorization'],
  credentials:true
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/only',only);
app.use("/reg",reg)
app.use("/login",login)
app.use("/clear",clear)

// catch 404 and forward to error handler


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;