var express = require('express');
const app = express();
var router = express.Router();
var path = require('path');
var fs = require('fs');
// const multer = require('multer');
// const uploadWithOriginalFilename = multer({dest:20.191.105.30:22});

var session = require('express-session');
var logintest;//로그인 정보 검사

var manager = require('./grafana.js');
var loginid;

var mdbConn = require('./mdb.js');
var id, pw;
//const { response } = require('express');

var mariadb = require('mariadb');

var template_m = require('../lib/template-m3.js');

// var storage  = multer.diskStorage({ // 2
//   destination:(req, file, callback)=>{
//     callback(null,"uploads/");
//   },
//   filename:(req, file, callback)=>{
//     callback(null, `${Date.now()}__${file.originalname}`);
//   },
// });

// var authData = {
//   email: 'khe_1004@naver.com',
//   password:'11111',
//   nickname: 'won'
// }

// router.get('/login', function(request,response){
//   fs.readdir('./data', function(error, filelist){
   
//       var title = 'WEB - login';
//      // var list = template.list(filelist);
//       var html = template.HTML(title,`
//         <form action="/auth/login_process" method="post">
//           <p><input type="text" name="inputid" placeholder="id"></input></p>
//           <p><input type="password" name="pwd" placeholder="password"></input></p>
//           <p>
//            <input type="submit" value="login"></input>
//           </p>
//         </form>`);
//         response.send(html);
      
//   });

// });

router.post('/login_process', function(request, response){
  var post = request.body;
  var inputid = post.inputid;
  var password = post.pwd;
  loginid=inputid
  mdbConn.getUserList(inputid,password) .then((rows) => { ;

    console.log(rows);
   //console.log(typeof(rows[2]));
    logintest=rows[1];
    if(logintest===1){
      request.session.is_logined =true;
      //request.session.nickname = authData.nickname;
      //app.use('/grafana', managerRouter);
      var html = template_m.HTML(inputid);
      manager.getGrafana(inputid);
      response.send(html);
      //response.send('Welcome!');
    }else{
      response.redirect('./loginError');
      //response.send('Who?');
    }
   //response.redirect(`/topic/${title}`);
    
    // id = rows.id;
    // pw = rows.pw;
    // console.log(rows.id); 
  }) .catch((errMsg) => { 
    console.log(errMsg); 
  });
  
  
});

router.get('/loginError', function(request, response){
  var errorPage = `
  <html>
    <head>
      <meta http-equiv="refresh" content="2;url=/" charset="utf-8" />
    </head>
    <body>
      <div class = >
        <h1> 아이디나 비밀번호가 다릅니다 </h1><br>
        <h1> 확인 후 다시 로그인 해주세요</h1><br>
        <h2> 2초 후 홈 화면으로 다시 이동합니다 </h2>
      </div>
    </body>
  </html>
  `;
  response.send(errorPage);
  });

  // router.post('/uploadFileWithOriginalFilename', uploadWithOriginalFilename.single('attachment'), function(req,res){ // 5
  //   var html = template_m.HTML(loginid);
     
  //   response.send(html);
  //   //res.render('/login_process', { file:req.file, files:null });
  //   // res.redirect('/login_process');
  // });

/*
router.get('/login', function(request,response){
  fs.readdir('./data', function(error, filelist){
   
      var title = 'WEB - login';
      var list = template.list(filelist);
      var html = template.HTML(title, list,`
        <form action="/auth/login_process" method="post">
          <p><input type="text" name="email" placeholder="email"></input></p>
          <p><input type="password" name="pwd" placeholder="password"></input></p>
          <p>
           <input type="submit" value="login"></input>
          </p>
        </form>`,'');
        response.send(html);
      
  });

});

/*
router.get('/login', function(request,response){
  var title = 'WEB - login';
  var list = template.list(request.list);
  var html = template.HTML(title, list,`
    <form action="/auth/login_process" method="post">
      <p><input type="text" name="email" placeholder="email"></input></p>
      <p><input type="password" name="pwd" placeholder="password"></input></p>
      <p>
       <input type="submit" value="login"></input>
      </p>
    </form>`,'');
    response.send(html);
  
});*/





/*
router.get('/:pageId', function(request,response){
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
module.exports = router;