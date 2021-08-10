var express = require('express');
const app = express();
var router = express.Router();
var path = require('path');
var fs = require('fs');

var mdbConn = require('./signupdb.js');
var mariadb = require('mariadb');

var template_s = require('../lib/template-s.js');

app.use(express.static(__dirname + '/public'));

router.get('/signup_process', function(request, response){
    var html = template_s.HTML("회원가입");
    //manager.getGrafana(inputid);
    response.send(html);
});

router.post('/signup_ok', function(request, response){
    var post = request.body;
    var userid = post.inputid;
    var userpw = post.pwd;
    var emnum = post.employeenum;
    mdbConn.getSignupList(userid, userpw, emnum) .then((rows) => { 
        console.log(rows);
        if (rows === "iderror"){
            console.log("아이디 중복");
            response.write("<script>alert('This ID is already taken')</script>");
            response.write("<script>window.location=\"./signup_process\"</script>");
        }else if (rows === "enumerror"){
            response.write("<script type='text/javascript' charset='utf-8'>alert('이미 가입된 사원번호입니다.')</script>");
            response.write("<script>window.location=\"./signup_process\"</script>");
        }else if (rows === "ok"){
            var okPage = `
                <html>
                    <head>
                        <meta http-equiv="refresh" content="2;url=/" charset="utf-8" />
                    </head>
                    <body>
                        <div class = >
                            <h1> WELCOME </h1><br>
                            <h1> 회원가입이 완료되었습니다.</h1><br>
                            <h2> 2초 후 로그인 화면으로 다시 이동합니다 </h2>
                        </div>
                    </body>
                </html>
                `;
            response.send(okPage);

        }
      }) .catch((errMsg) => { 
        console.log(errMsg); 
      });
    
});

module.exports = router;