module.exports = {
    HTML:function(inputid){
      return `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - </title>
        <meta charset="utf-8">
      </head>
      <body>
      <style>
          
          .sidebar{
            width: 17%;
            height: 100vh;
            background-color : #181B1F;
            position: relative;
            float: left;
            
          }
          .user{
            
            top:5px;
            left: 50px;
            position: absolute;

          }
          
          .graph{
            
            width: 83%;
            height: 100vh;
            background-color : #111217;
            position: relative;
            float: left;
          }
          .grafana1{
            top:30px;
            left:60px;
            width: 800px;
            height: 500px;
            background-color:#FFFFFF;
            position: absolute;
          }
          .g1{
            width:100%;
            height:100%;
          }
          
        </style>
        
          
            <div class="sidebar">
              <div class="img1">
               <img src='./user.png'>
              </div>
              <div class="user">

                <h3 style="color:#D8E8E8">${inputid}</h3>
                <h4 style="color:#D8E8E8">Engineer</h4>

              </div>
            </div>
            <div class="graph">
              <div class="grafana1">
                <iframe class="g1" src="http://20.94.210.98:3000/d-solo/USeU_Sm7z/timeorigin?orgId=1&panelId=2" width="450" height="200" frameborder="0"></iframe>
                
              </div>
            </div>
          
        
        
        
      </body>
      </html>
      `;
    }
  }
  