var mysql      = require('mysql');
var con = mysql.createConnection({
  host: "root@localhost",
  user: "root@localhost",
  password: "Aakde8959@",
  database: "c9",
});

/*
con.connect(function(err) {  
if (err) throw err;  
console.log("Connected!");  
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log("Table created");  
});  

});

*/
var sql = "CREATE TABLE answers (sid INT , qid INT,aid INT,  answer VARCHAR(255),PRIMARY KEY(sid,qid,aid))";  

//     var sql = "SELECT id,sname,aname FROM schol WHERE id>23;";
 con.query(sql, function (err, result) {
   if (err) throw err;
   console.log(result);
 });

