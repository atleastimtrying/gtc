
/**
 * Module dependencies.
 */

var express = require('express');
var browserify = require('browserify-middleware');
var routes = require('./routes');
var MongoClient = require('mongodb').MongoClient;
var app = express();
var http = require('http').createServer(app);
var path = require('path');

var io = require('socket.io')(http);


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/join', routes.index);
app.get('/create', routes.index);
app.get('/play', routes.index);

http.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var generate_code = function(){
  return (Math.ceil(Math.random() * 10000));
};

var generate_colour = function(){
  return "hsl(" + Math.round(360 * Math.random()) + ", 60%, 50%)";
};

var code;

io.on('connection', function(socket){
  socket.on('create_game', function(){
    code = generate_code();
    socket.emit('generated_code', code);
  });

  socket.on('start_game', function(){
    socket.emit('start!');
    setTimeout(function(){
      socket.emit('end');
    });
  });

  socket.on('join', function(){
    socket.emit('joined', code);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
