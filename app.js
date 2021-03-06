var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const produtoRouter = require("./routes/rotaProdutos");
const homeRouter = require('./routes/rotaHome')
const catalogoRouter = require ('./routes/rotaCatalogo')
const sacolaRouter = require('./routes/rotaSacola');
const pagamentoRouter = require('./routes/rotaPagamento');
const loginRouter = require('./routes/rotaLogin');
const cadastroRouter = require('./routes/rotaCadastro');

var app = express();

// view engine setup
app.set('views', pathjoin(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', produtoRouter);
app.use('/', homeRouter);
app.use('/', catalogoRouter);
app.use('/', sacolaRouter);
app.use('/', pagamentoRouter);
app.use('/', loginRouter);
app.use('/', cadastroRouter);


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
