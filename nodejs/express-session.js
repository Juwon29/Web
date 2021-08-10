var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')

var FileStore = require('session-file-store')(session);

var app = express()

app.use(session({
  secret: 'keyboard cat', //secret은 꼭 있어야하는 옵션 다른 사람에게 노출되면 안됨
  resave: false,
  saveUninitialized: true, //true면 세션이 필요할때까지 구동하지 않음
  store: new FileStore()
}))

/*
app.use(function (req, res, next) {
  if (!req.session.views) {
    req.session.views = {}
  }

  // get the url pathname
  var pathname = parseurl(req).pathname

  // count the views
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1

  next()
})


app.get('/foo', function (req, res, next) {
  res.send('you viewed this page ' + req.session.views['/foo'] + ' times')
})

app.get('/bar', function (req, res, next) {
  res.send('you viewed this page ' + req.session.views['/bar'] + ' times')
})
*/

app.get('/', function (req, res, next) {
  console.log(req.session);
  if(req.session.num === undefined){
    req.session.num = 1;
  }else{
    req.session.num = req.session.num + 1;
  }
  res.send(`Views : ${req.session.num}`);
})

app.listen(3040, () => {
    console.log(3040)
  });