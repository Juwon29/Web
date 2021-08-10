module.exports = {
    HTML:function(title){
      return `<!DOCTYPE html>
      <html>
          <head>
              <!-- Required meta tag -->
              <meta charset="utf-8"/>
              <title>Document</title>
              <link rel="stylesheet" href="/css/style.css">
              <script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
          </head>
          <body>
              <section class="login-form">
                  <h1>Welcome!</h1>
                  <form action="/auth/login_process" method="post">
                      <div class="int-area id_inputBox">
                          <input type="text" name="inputid" id="inputid"
                          autocomplete="off" required>
                          <label class="id_label" for="inputid">User ID</label>
                      </div>
                      <div class="int-area pw_inputBox">
                          <input type="password" name="pwd" id="pwd"
                          autocomplete="off" required>
                          <label class="pw_label" for="inputid">Password</label>
                      </div>
                      <div class="btn-area">
                          <button type="submit">LOGIN</button>
                      </div>
                  </form> 
                  <div class="caption">
                      <a href="/signup/signup_process">Sign-up</a><br>
                      <a href="">Forget password?</a>
                  </div>
              </section>
              <!--script>
                  let id = $('#id');
                  let pw = $('#pw');
                  let btn = $('#btn');
      
                  $(btn).on('click', function(){
                      if($(id).val()==""){
                          $(id).next('label').addClass('warning');
                          setTimeout(function(){
                              $('label').removeClass('warning');
                          }, 1500);
                      }
                      else if($(pw).val()==""){
                          $(pw).next('label').addClass('warning');
                          setTimeout(function(){
                              $('label').removeClass('warning');
                          }, 1500);
                      }
                  });
              </script -->
      
              <script>
                  $(document).ready(function () {
                      $('div.btn-area').click(function () {
                          if($('div.id_inputBox').children('input').val()==""){
                              $('div.id_inputBox').children('label.id_label').addClass('warning');
                              setTimeout(function(){
                                  $('label.id_label').removeClass('warning');
                               }, 1500);
                          }
                          else if($('div.pw_inputBox').children('input').val()==""){
                              $('div.pw_inputBox').children('label.pw_label').addClass('warning');
                              setTimeout(function(){
                                  $('label.pw_label').removeClass('warning');
                               }, 1500);
                          }
                      });
                  });
              </script>
          </body>
      </html>`;
    }
   
  }
  