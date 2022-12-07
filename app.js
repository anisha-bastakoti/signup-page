const express=require ('express');
const app=express();
const ejs =require('ejs');
const morgan =require('morgan');
const bodyparser= require('body-parser');
const path=require('path');

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json());
app.set('views',path.join(__dirname +'/views/'))

app.use(morgan('tiny'));
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('signup');
})

  app.post('/signup',(req,res)=>{
console.log("using body parser:",req.query.email);
res.send(req.query)
  })
  var PORT = process.env.port || 3000
  app.listen(PORT, function(error){
    if (error) throw error
    console.log("Server created Successfully on PORT", PORT)
})