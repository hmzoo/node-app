var express = require('express');
var session = require('express-session')

var app = express();

var sess = {
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 3600000}
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}
app.use(session(sess));

app.use(express.static('./public'));

app.get('/sid', function (req, res, next) {
  // Increment "index" in session
  console.log(req.session);
  req.session.index = (req.session.index || 0) + 1;
  // View "session-index.ejs"
  res.send('SID:'+req.sessionID+' index:'+req.session.index);
});

//Socket.io
var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function(client) {
  console.log('new client',client.id);

  client.on('disconnect', function () {
    console.log('client disconnected',client.id);
  });

    client.on('test', (data) => {
      console.log('test',data);
    });

    client.on('MSG', (data) => {
      data.from=client.id;
      io.emit('MSG',data)
      console.log('MSG',data);
    });
});

//Start server
server.listen(3000, function() {
    console.log('node-app listening on port 3000 ...')
});
