var OrientDB = require('orientjs');

var server = OrientDB({
host: 'localhost',
port: 2424,
username: 'root',
password: '111111'
});
var db = server.use('o3');

/*var sql = 'SELECT FROM topic';
db.query(sql).then(function(results){
console.log(results);
});*/

var sql = 'SELECT FROM topic';
var param = {
    params:{
        rid:'#35:0'
    }
}
db.query(sql, param).then(function(results){
console.log(results);
});