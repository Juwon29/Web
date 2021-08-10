const express = require('express')
const app = express()
const port = 3040
var bodyParser = require('body-parser')
var session = require('express-session')
var FileStore = require('session-file-store')(session);

var fs = require('fs');
var template = require('./lib/template-h.js');
var consu = require('./lib/consumer.js');
var sanitizeHtml = require('sanitize-html');
var path = require('path');

var topicRouter = require('./routes/topic');
var authRouter = require('./routes/auth');
var signupRouter = require('./routes/signup');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));


app.get('/', (request, response) => {
    fs.readdir('./data', function(error, filelist){
        var title = 'welcome';
        var description = '음성데이터 기반 감정 분석';
        //var list = template.list(filelist);
        var html = template.HTML(title);
        // response.writeHead(200);
        // response.end(html);
        response.send(html);
      }); 
  //res.send('Project Team M')
});

app.use(session({
  secret: 'keyboard cat', //secret은 꼭 있어야하는 옵션 다른 사람에게 노출되면 안됨
  resave: false,
  saveUninitialized: true, //true면 세션이 필요할때까지 구동하지 않음
  store: new FileStore()
}));
app.use('/topic', topicRouter); ///topic으로 시작하는 애들에게 topicRouter 미들웨어를 적용
app.use('/auth', authRouter);
app.use('/signup', signupRouter);


/* //카프카연동
app.get('/topic/:pageId', function(request,response){
  //return response.send(request.params);
  fs.readdir('./data', function(error, filelist){
      var filteredId = path.parse(request.params.pageId).base;
      fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
        var title = request.params.pageId;
        var sanitizedTitle = sanitizeHtml(title);
        
        //console.log(title);
        var con = consu.content(title);
        
        var sanitizedDescription = sanitizeHtml(con, {
          allowedTags:['h1']
        });
       
        var list = template.list(filelist);
        var html = template.HTML(sanitizedTitle, list,
          `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`, //제목이랑 내용 뜨는 것 sanitizedDescription이 그 파일 내용 뜨는 것
          ` <a href="/create">create</a>
            <a href="/update?id=${sanitizedTitle}">update</a>
            <form action="delete_process" method="post">
              <input type="hidden" name="id" value="${sanitizedTitle}">
              <input type="submit" value="delete">
            </form>`
        );
        
        response.send(html);
      });
    });
});
*/


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});