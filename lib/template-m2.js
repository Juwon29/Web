module.exports = {
    HTML: function (inputid) {
        return `
      <!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>dash-board</title>
        <link rel="stylesheet" href="/css/dash_style_ver3.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!--Icon CDN Link-->
        <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
    </head>
    <body>
        <div class="sidebar">
            <div class="logo_content">
                <div class="logo">
                    <i class="las la-hands"></i>
                    <div class="logo_name">mirae son</div>
                </div>
                <i class='bx bx-menu' id="btn"></i>
            </div>
            <div class="profile_content">
                <div class="profile">
                    <div class="profile_details">
                        <img src="/css/user.jpg" alt="">
                    </div>
                    <div class="name_job">
                        <div class="name">${inputid}</div>
                        <div class="job">Data Engineer</div>
                    </div>
                    <div class="btn_area">
                    <a href="/">
                        <button type="submit">logout</button>
                    </a>
                    </div>
                    
                </div>
            </div>
            <ul class="nav_list">
                <li>
                    <a href="#">
                        <i class='bx bxs-dashboard' ></i>
                        <span class="links_name">Main Board</span>
                    </a>
                    <span class="tooltip">Main Board</span>
                </li>
                <li>
                    <a href="#">
                        <i class='bx bxs-data'></i>
                        <span class="links_name">Usage Capacity</span>
                    </a>
                    <span class="tooltip">Usage Capacity</span>
                </li>
                <li>
                    <a href="#">
                        <i class='bx bx-line-chart'></i>
                        <span class="links_name">Live Streaming</span>
                    </a>
                    <span class="tooltip">Live Streaming</span>
                </li>
                <li>
                    <a href="#">
                        <i class='bx bxs-bell' ></i>
                        <span class="links_name">Notification</span>
                    </a>
                    <span class="tooltip">Notification</span>
                </li>
                <li>
                    <a href="#">
                        <i class='bx bxs-cog'></i>
                        <span class="links_name">Settings</span>
                    </a>
                    <span class="tooltip">Settings</span>
                </li>
            </ul>
            <div class="upload_modal_container">
                <div class="upload">
                    <div class="upload_details">
                        <a href="">
                            <i class='bx bx-upload'></i>
                            <div class="open_modal">File Upload</div>
                        </a>
                        <!-- <span class="tooltip">File Upload</span> -->
                    </div>
                </div>
            </div>
            <div class="modal_pannel">
                <div class="modal">
                    <div class="titles_modal">
                        <i class='bx bx-upload'></i>
                        <h1>File Upload</h1>
                    </div>
                    <p>testing... modal</p>
                    <button class="close">Close</button>
                </div>
            </div>
        </div>
        
        <div class="home_content">
            <div class="text">
                main board
            </div>
        </div>
        <div class="Usage_1"></div>
        <div class="Usage_2"></div>
        <div class="Usage_3"></div>
        <div class="Stream_1">
            <div class="stream_1_title"></div>
            <div class="stream_chart_1"><iframe class="g1" src="http://20.94.210.98:3000/d-solo/USeU_Sm7z/timeorigin?orgId=1&panelId=2" width="1436" height="200" frameborder="0"></iframe></div>
        </div>
        <div class="Stream_2">
            <div class="stream_2_title"></div>
            <div class="stream_chart_2"></div>
        </div>
        <script>
            let btn = document.querySelector("#btn");
            let sidebar = document.querySelector(".sidebar");

            
            const upload_modal_container = document.getElementsByClassName('upload_modal_container');
            const modal_pannel = document.getElementsByClassName('modal_pannel');
            const close_modal = document.getElementsByClassName('close');

            btn.onclick = function(){
                sidebar.classList.toggle("active");
            }
            sidebar.onclick = function(){
                sidebar.classList.toggle("active");
            }
            upload_modal_container.addEventListener('click', () =>{
                modal_pannel.classList.add('show');
            })

        </script>
    </body>
</html>


      `;
    }
}
