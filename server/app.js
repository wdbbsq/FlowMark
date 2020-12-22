var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const api = require('./routes/api');

const mongoose = require('mongoose');
const tunnel = require('tunnel-ssh');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// connect to MongoDB
const config = {
    username: 'root', 
    host: '192.168.1.40', 
    port: 8839, 
    dstPort: 27017,
    dstHost: 'localhost',
    localPort: 27017,
    localHost: '127.0.0.1',
    password: 'yangyang123',
    // keepAlive: true
}; 

var server = tunnel(config, function (error, server) { 
    if (error){ 
        console.log("SSH connection error: " + error); 
    }
    else {
        console.log("SSH connected");
    }

    mongoose.connect('mongodb://127.0.0.1:27017/netTrafficData', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    var db = mongoose.connection; 
    db.on('error', console.error.bind(console, 'DB connection error:')); 
    db.once('open', function() { 
        console.log("DB connection successful"); 
    }); 
}); 

// try {
//     // mongoose.connect('mongodb://localhost:27017/test', {
//     //     useNewUrlParser: true,
//     //     useUnifiedTopology: true
//     // });
//     mongoose.connect('mongodb://root:yangyang123@192.168.1.40:8839/netTrafficData', { 
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
// } 
// catch (error) {
//     console.log('Lost connection to Database.');
// }

// CORS config here
app.all('/*', function(req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/v1', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

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
