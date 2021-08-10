var mariadb = require('mariadb');
const bcrypt = require('bcrypt');
const saltRounds = 10;
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

async function GetSignupList(id,pw,employeenum){
    console.log(id);
    console.log(pw);
    console.log(employeenum);
  let conn, rows, allrows, array, rarray;
  
  var e, i;
  
  try{
    conn = await pool.getConnection();
    conn.query('USE mysql');
    allrows = await conn.query('SELECT count(*) FROM login where id = "'+id+'"');
    emrows = await conn.query('SELECT count(*) FROM login where employeenum = "'+employeenum+'"');

    console.log('allrows비교전');
    console.log(Object.values(allrows[0])[0]);
    
    if(Object.values(allrows[0])[0] === 0){
        
       if(Object.values(emrows[0])[0] === 0){
        console.log(id);
        console.log(pw);
        console.log(employeenum);
            rows = await conn.query("INSERT INTO login VALUES ('"+employeenum+"','"+id+"','"+pw+"',0)");
            if(conn) conn.end();
            return "ok";
           
       }else{
            if(conn) conn.end();
            return "enumerror";
       }
    }else{

        if(conn) conn.end();
        return "iderror";
    }
        
  }
  catch(err){
    throw err;
  }
  finally{

  }
}

module.exports = {
  getSignupList: GetSignupList
}