module.exports = {
  HTML:function(title){
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <div class ='rect1'>
        <h1><a href="/">Welcome</a></h1>
      </div>
      <style>
        .rect1{
          margin-left: 615px;
          margin-top: 200px;
          background: white;
        }
        .rect2{
          margin-left: 600px;
          margin-top: 50px;
          background: white;
        }
        .rect3{
          margin-left:60px;
        }
      </style>
      <div class ='rect2'>
        <form action="/auth/login_process" method="post">
           <p><input type="text" name="inputid" placeholder="id"></input></p>
            <p><input type="password" name="pwd" placeholder="password"></input></p>
            <div class ='rect3'>
              <p><input type="button" value="sign-up"></input>
                <input type="submit" value="login"></input></p>
            </div>
        </form>
      </div>
    </body>
    </html>
    `;
  }
  // },list:function(filelist){
  //   var list = '<ul>';
  //   var i = 0;
  //   while(i < filelist.length){
  //     list = list + `<li><a href="/topic/${filelist[i]}">${filelist[i]}</a></li>`;
  //     i = i + 1;
  //   }
  //   list = list+'</ul>';
  //   return list;
  // }
}
