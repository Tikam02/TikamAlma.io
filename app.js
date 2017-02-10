var express = require('express');
var app = express();

 app.set('view engine','ejs');
app.use('/css',express.static('css'));
app.use('/font',express.static('font'));
app.use('/img',express.static('img'));
app.use('/js', express.static('js'));


app.get('/', function(req,res){
res.render('index');
});

app.get('/blog-1',function(req,res){
  res.render('blog-1');
});


app.listen(3000);
