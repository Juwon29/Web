var mariadb = require('mariadb');
const sanitize = require('sanitize-html');


var pool = mariadb.createPool({
  host: '20.191.105.30',
  port : '3306',
  user: 'master',
  password: '1234',
  database: 'mysql',
  connectionLimit: 15,
  allowPublicKeyRetrieval : true
});

async function GetUserList(id,pw){
    console.log(id);
    console.log(pw);
  let conn, rows, allrows, array, rarray,lcheck1,lcheck2;
  
  var e, i;
  
  try{
    conn = await pool.getConnection();
    conn.query('USE mysql');
    rows = await conn.query('SELECT * FROM login where id = "'+id+'" && pw = "'+pw+'"');
    allrows = await conn.query('SELECT id FROM login');
    cnt = await conn.query('SELECT count(*) as cc FROM login');
    

    //var c = cnt.values(cc);
    
    if(rows[0] === undefined){
        e = 0;
    }else{
        e = 1;
        lcheck1 = await conn.query('UPDATE login SET lcheck=0');
        lcheck2 = await conn.query('UPDATE login SET lcheck=1 where id="'+id+'"');
    }
  
    rarray =[allrows, e,cnt[0]];
      
  }
  catch(err){
    throw err;
  }
  finally{
    if(conn) conn.end();
    return rarray;
    
  }
}

module.exports = {
  getUserList: GetUserList
}