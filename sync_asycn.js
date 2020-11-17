var fs = require('fs');

//Sync 동기적인방식 
console.log(1);
var data = fs.readFileSync('data.txt',{encoding:'utf8'});
console.log(data);

//Async 비동기적인 방식 = 2 4 3 txt
console.log(2);
fs.readFile('data.txt',{encoding:'utf8'}, function(err,data){
    console.log(3);
    console.log(data);
})
console.log(4);