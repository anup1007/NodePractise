// function myName(name){

// 	console.log("My Name is " + name);
// }

// myName("Anup Nagarkoti");

// var log = require('./logger');

// console.log(log);


// const path = require('path');

// var pathObj = 
// path.parse(__filename);

// console.log(pathObj);
// var fs = require('fs');
// fs.readdir('ahgsdhjasd',function(err,files){
// if(err) console.log('Error occured',err);
// else console.log('Result',files);

//  });
const connection = require('express')
const port = 3000;
const app = connection();
const dir = __dirname;

var mysequelize = require("./config/dbconfig");
var usermodel = require('./models/UserModel');


var bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

var express = require('express')
var multer = require('multer')
var upload = multer({dest: 'resources/uploads/'})

var mystorage  = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,"resources/uploads")
  },
  filename: function(req,file,cb){
    cb(null,'ajshdjashd')
  }
})
var upload = multer({storage: mystorage});
const path = require('path')

// set static path

// app.use(connection.static(path.join(dir,'public')))

app.use(connection.static(path.join(__dirname,'resources')))
app.set('views',__dirname+'/views')

app.set('view engine','ejs');
 
// app.get('/index', function (req, res) {
//   res.sendFile(__dirname + '/view/index.html');
// })
 
//  var jungles ={
//  	1 : 'banne',
//  	2 : 'small banne',
//  	3 : 'big banne'
//  }
// app.get('/jungles/:id',function(req,res){
// res.render('index',{name:jungles[req.params.id]});
// })

app.get('/registration',(req,res)=>{
  res.render('registration',{
    message:''
  })

})

app.post('/registration',upload.single("userphoto"),function(req,res,next){
  console.log(req.file);
  // console.log(req.body)
    // if(req.body.username == '' && req.body.password == ''){
    //   res.render('registration',{message: 'username and password cannot be empty'})
    // }else{
    // console.log(req.body.username)
    // console.log(req.body.password) 
    // console.log(req.body.username,req.body.password);
    // res.status(200).json({
    //   success:true  
    // }) 



// res.status(200).send({'success':true}); 

// res.send({"test":"sdasda"})


})

// //data insert create
// usermodel.create({

//  username:"asdas",
//  password:"asdas",
//  userphoto:"hagsdhjad",
//  testval:'hitman'


// })

// .then(function(result){

// })
// .catch(function(err){
// console.log(err)
// })



app.listen(3000)