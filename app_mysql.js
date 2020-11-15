var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var mysql      = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '111111',
  database : 'o2'
});

conn.connect();
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.locals.pretty = true; // jade줄바꿈 예쁘게해주는 코드
app.set('views','./views_file');
app.set('view engine', 'jade')

app.get('/topic/new',function(req,res){
    fs.readdir('data',function(err, files){
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        res.render('new', {topics:files});
    });
});
app.get(['/topic', '/topic/:id'],function(req,res){
    var sql = 'SELECT id,title FROM topic';
    conn.query(sql, function(err, rows, fields){
        res.send(rows);
    });
   /* fs.readdir('data',function(err, files){
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        var id = req.params.id;
        if(id){
        // id값이 있을때
        fs.readFile('data/'+id, 'utf-8', function(err, data){
            if(err){
                console.log(err);
                res.status(500).send('Internal Server Error');
            }
            res.render('view', {topics:files, title:id, description:data});
          })
        } else {
          //id 값이 없을때
        res.render('view', {topics:files, title:'Welcome', description:'Hello JavaScript for Server.'});
        }
    })*/
});
app.post('/topic',function(req,res){
    var title = req.body.title;
    var description = req.body.description;
    fs.writeFile('data/'+title,description, function(err){
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        res.redirect('/topic/'+title);
    });
})
app.listen(3000,function(){
    console.log('Connected, 3000 port')
})