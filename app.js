var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./app/routes/index');
var usersRouter = require('./app/routes/users');
var membersRouter = require('./app/routes/note.routes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'),{extensions: 'html'}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/memberPage', membersRouter);

module.exports = app;
