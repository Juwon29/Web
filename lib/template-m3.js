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
                                    <button type="submit" id="btn_logout">logout</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <ul class="nav_list">
                        <li>
                            <a href="#">
                                <i class='bx bxs-dashboard' ></i>
                                <button class="links_name" type="button" value='toggleDiv' onclick='mtoggleDiv()'>Main Board</button>
                            </a>
                            <span class="tooltip">Main Board</span>
                        </li>
                        <li>
                            <a href="#">
                                <i class='bx bxs-data'></i>
                                <button class="links_name" type="button" value='toggleDiv' onclick='toggleDiv()'>Usage Capacity</button>   
                            </a>
                            <span class="tooltip">Usage Capacity</span>
                        </li>
                        <li>
                            <a href="#">
                                <i class='bx bx-line-chart'></i>
                                <button class="links_name" type="button" value='toggleDiv' onclick='ltoggleDiv()'>Live Streaming</button>
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
                                <a class="popup">
                                    <i class='bx bx-upload'></i>
                                    <button class="links_name" type="button" value='toggleDiv' onclick='ftoggleDiv()'>File Upload</button>
                                    <!--<div class="open_modal">File Upload</div>-->
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
                        <span> </span>
                    </div>
                </div>
                <div class ="Mainboard" id ="Mainboard">
                    <div class="MUsage_1"><iframe src="http://20.191.105.30:3000/d-solo/-eXWkHMnz/cpucpu?orgId=1&panelId=2" width="352" height="200" frameborder="0"></iframe></div>
                    <div class="MUsage_2"><iframe src="http://20.191.105.30:3000/d-solo/-eXWkHMnz/cpucpu?orgId=1&panelId=10" width="352" height="200" frameborder="0"></iframe></div>         
                    <div class="MUsage_3"><iframe src="http://20.191.105.30:3000/d-solo/-eXWkHMnz/cpucpu?orgId=1&panelId=4" width="352" height="200" frameborder="0"></iframe></div>
                    <div class="MUsage_4"><iframe src="http://20.191.105.30:3000/d-solo/-eXWkHMnz/cpucpu?orgId=1&panelId=8" width="352" height="200" frameborder="0"></iframe></div>
                    <div class="MStream_1">
                        <div class="stream_1_title"></div>
                        <div class="stream_chart_1"><iframe src="http://20.191.105.30:3000/d-solo/6whTcvW7k/emotion_panel?orgId=1&from=1598596420034&to=1598642822003&panelId=2" width="1436" height="400" frameborder="0"></iframe></div>
                    </div>
                    
                </div>
                <div class ="UsageCapacity" id ="UsageCapacity">
                    <div class="Usage_1"><iframe src="http://20.191.105.30:3000/d-solo/i2DgiEZ7k/cpu_avg?orgId=1&from=1627349535394&to=1627371135394&panelId=14" width="352" height="200" frameborder="0"></iframe></div>
                    <div class="Usage_2"><iframe src="http://20.191.105.30:3000/d-solo/i2DgiEZ7k/cpu_avg?orgId=1&from=1627349582842&to=1627371182842&panelId=2" width="352" height="200" frameborder="0"></iframe></div>         
                    <div class="Usage_3"><iframe src="http://20.191.105.30:3000/d-solo/i2DgiEZ7k/cpu_avg?orgId=1&from=1627349606737&to=1627371206737&panelId=6" width="352" height="200" frameborder="0"></iframe></div>
                    <div class="Usage_4"><iframe src="http://20.191.105.30:3000/d-solo/i2DgiEZ7k/cpu_avg?orgId=1&from=1627349629737&to=1627371229737&panelId=8" width="349" height="200" frameborder="0"></iframe></div>
                    <div class="Usage_5"><iframe src="http://20.191.105.30:3000/d-solo/i2DgiEZ7k/cpu_avg?orgId=1&from=1627351104066&to=1627372704066&panelId=16" width="352" height="200" frameborder="0"></iframe></div>
                    <div class="Usage_6"><iframe src="http://20.191.105.30:3000/d-solo/i2DgiEZ7k/cpu_avg?orgId=1&from=1627351134057&to=1627372734057&panelId=12" width="352" height="200" frameborder="0"></iframe></div>         
                    <div class="Usage_7"><iframe src="http://20.191.105.30:3000/d-solo/i2DgiEZ7k/cpu_avg?orgId=1&from=1627351166025&to=1627372766025&panelId=10" width="352" height="200" frameborder="0"></iframe></div>
                    <div class="Usage_8"><iframe src="http://20.191.105.30:3000/d-solo/i2DgiEZ7k/cpu_avg?orgId=1&from=1627351214946&to=1627372814946&panelId=4" width="349" height="200" frameborder="0"></iframe></div>
                    <div class="Stream_1">
                        <div class="stream_1_title"></div>
                        <div class="stream_chart_1"><iframe src="http://20.191.105.30:3000/d-solo/f508gHM7z/node-exporter-full?orgId=1&refresh=1m&panelId=3" width="708" height="200" frameborder="0"></iframe></div>
                    </div>
                    <div class="Stream_2">
                        <div class="stream_2_title"></div>
                        <div class="stream_chart_2"><iframe src="http://20.191.105.30:3000/d-solo/f508gHM7z/node-exporter-full?orgId=1&refresh=1m&panelId=24" width="708" height="200" frameborder="0"></iframe></div>
                    </div>
                    <div class="Stream_3">
                        <div class="stream_3_title"></div>
                        <div class="stream_chart_3"><iframe src="http://20.191.105.30:3000/d-solo/f508gHM7z/node-exporter-full?orgId=1&refresh=1m&panelId=84" width="708" height="200" frameborder="0"></iframe></div>
                    </div>
                    <div class="Stream_4">
                        <div class="stream_4_title"></div>
                        <div class="stream_chart_4"><iframe src="http://20.191.105.30:3000/d-solo/f508gHM7z/node-exporter-full?orgId=1&refresh=1m&panelId=156" width="708" height="200" frameborder="0"></iframe></div>
                    </div>
                </div>

                <div class ="LiveStreaming" id ="LiveStreaming">
                    <div class="LStream_1">
                        <div class="stream_1_title"></div>
                        <div class="stream_chart_1" align="center"><iframe src="http://20.191.105.30:3000/d-solo/51Vj4FG7k/emotiongraph?orgId=1&panelId=2" width="700" height="400" frameborder="0"></iframe></div>
                    </div>
                    <div class="LStream_2">
                        <div class="stream_2_title"></div>
                        <div class="stream_chart_2" align="center"><iframe src="http://20.191.105.30:3000/d-solo/ZJVQksG7z/model?orgId=1&panelId=2" width="300" height="400" frameborder="0"></iframe>></iframe></div>
                    </div>
                    <div class="LStream_5">
                        <div class="stream_2_title"></div>
                        <div class="stream_chart_2" align="center"><iframe src="http://20.191.105.30:3000/d-solo/51Vj4FG7k/emotiongraph?orgId=1&panelId=14" width="180" height="190" frameborder="0"></iframe></div>
                    </div>
                    <div class="LStream_6">
                        <div class="stream_2_title"></div>
                        <div class="stream_chart_2" align="center"><iframe src="http://20.191.105.30:3000/d-solo/51Vj4FG7k/emotiongraph?orgId=1&panelId=10" width="180" height="190" frameborder="0"></iframe></div>
                    </div>
                    <div class="LStream_3">
                        <div class="stream_3_title"></div>
                        <div class="stream_chart_3" align="center"><iframe src="http://20.191.105.30:3000/d-solo/51Vj4FG7k/emotiongraph?orgId=1&panelId=12" width="400" height="195" frameborder="0"></iframe></div>
                    </div>
                    
                    <div class="LStream_4">
                        <div class="stream_4_title"></div>
                        <div class="stream_chart_4"><iframe src="http://20.191.105.30:5601/app/dashboards#/view/6c480c80-f8f1-11eb-8e52-7b34da2a354f?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-15m%2Cto%3Anow))" height="500" width="1120"></iframe></div>
                    </div>
                    
                </div>

                <div class ="FileUpload" id ="FileUpload">
                    <div class="Uploaduse">
                    <form  method="post" action="/uploadFileWithOriginalFilename" enctype="multipart/form-data">
                    <input type="file" name="attachment">
                    <button type="submit" class="btn btn-primary">Upload</button>
                    </form>
                    </div>
                </div>
                <script>
                    let btn = document.querySelector("#btn");
                    let sidebar = document.querySelector(".sidebar");

        
                    const upload_modal_container = document.getElementsByClassName('upload_modal_container');
                    const modal_pannel = document.getElementsByClassName('modal_pannel');
                    const close_modal = document.getElementsByClassName('close');
                    const mdiv = document.getElementById('Mainboard');
                    const udiv = document.getElementById('UsageCapacity');
                    const ldiv = document.getElementById('LiveStreaming');
                    const fdiv = document.getElementById('FileUpload');
                    
                    

                    udiv.style.visibility = 'hidden';
                    ldiv.style.visibility = 'hidden';
                    fdiv.style.visibility = 'hidden'; 
                    btn.onclick = function(){
                        sidebar.classList.toggle("active");
                    }
                    // UploadModal.onclick = function(){
                    //     sidebar.classList.toggle("");
                    // }
                    sidebar.onclick = function(){
                        sidebar.classList.toggle("active");
                    }
        
                    upload_modal_container.addEventListener('click', () =>{
                        modal_pannel.classList.add('show');
                    })

                    // window.onload = function(){
                    //     function onClick(){
                    //         document.querySelector().style.display='block';
                    //         document.querySelector().style.display='block';
                    //     }
                    //     function offClick() {
                    //         document.querySelector('.modal_wrap').style.display ='none';
                    //         document.querySelector('.black_bg').style.display ='none';
                    //     }
                     
                    //     document.getElementById('modal_btn').addEventListener('click', onClick);
                    //     document.querySelector('.modal_close').addEventListener('click', offClick);
                    
                    // };

                    function toggleDiv() {
                        mdiv.style.visibility ='hidden';
                        udiv.style.visibility='visible';
                        ldiv.style.visibility = 'hidden';
                        fdiv.style.visibility = 'hidden';
                        

                      }

                    function mtoggleDiv() {
                         mdiv.style.visibility ='visible';
                        udiv.style.visibility='hidden';
                        ldiv.style.visibility = 'hidden';
                        fdiv.style.visibility = 'hidden';
                        
                        
                    }
                    function ltoggleDiv() {
                        mdiv.style.visibility ='hidden';
                        udiv.style.visibility='hidden';
                        ldiv.style.visibility = 'visible';
                        fdiv.style.visibility = 'hidden';
                        
                       
                    }
                    function ftoggleDiv() {
                        mdiv.style.visibility ='hidden';
                        udiv.style.visibility='hidden';
                        ldiv.style.visibility = 'hidden';
                        fdiv.style.visibility='visible';
                       
                    }
        
                    // close_modal.addEventListener('click', () =>{
                    //     modal_pannel.classList.remove('show');
                    // })
                </script>
            </body>
        </html>
      `;
    }
}