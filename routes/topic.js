var express = require('express');
var router = express.Router();

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