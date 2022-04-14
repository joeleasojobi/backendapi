var express = require('express')
var bodyParser = require('body-parser')


var app=express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.send("Welcome to my website")
})

app.post('/read',(req,res)=>{
    var getName= req.body.name;
    var getRollno= req.body.rollno;
    
    res.json({"Name: ":getName, "Roll No":getRollno})
})



app.post('/add',(req,res)=>{
    var getnum1=parseFloat(req.body.num1)
    var getnum2=parseFloat(req.body.num2)

    var sum=getnum1+getnum2

    res.json({"Sum:":sum})

})

app.listen(process.env.PORT || 3000,()=>{
    console.log("hello");
})