module.exports = {
    HTML:function(title){
      return `
      <!DOCTYPE html>
<html>
    <head>
        <!-- Required meta tag -->
        <meta charset="utf-8"/>
        <title>Document</title>
        <link rel="stylesheet" href="/css/style2.css">
        <script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
    </head>
    <body>
        <section class="login-form">
            <h1>Neomogdeul</h1>
            <form action="/signup/signup_ok" method="post">
                <p>ID를 입력해주세요</p>
                <div class="int-area id_inputBox">
                    <input type="text" name="inputid" id="inputid"
                    autocomplete="off" required>
                    <label class="id_label" for="inputid">User ID</label>
                </div>
                <p>Password를 입력해주세요</p>
                <div class="int-area pw_inputBox">
                    <input type="password" name="pwd" id="pwd"
                    autocomplete="off" required>
                    <label class="pw_label" for="pwd">Password</label>
                </div>
                <p>사원번호를 입력해주세요</p>
                  <div class="int-area employeenum_inputBox">
                      <input type="text" name="employeenum" id="employeenum"
                      autocomplete="off" required>
                      <label class="employeenum_label" for="employeenum">Employee Number</label>
                  </div>
                <div class="btn-area">
                    <button type="submit">가입하기</button>
                </div>
            </form> 
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
                    else if($('div.employeenum_inputBox').children('input').val()==""){
                        $('div.employeenum_inputBox').children('label.employeenum_label').addClass('warning');
                        setTimeout(function(){
                            $('label.employeenum_label').removeClass('warning');
                         }, 1500);
                    }
                });
            });
        </script>
    </body>
</html>`;
    }
   
  }
  