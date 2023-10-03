// const express =require("express");
// const https = require("https");
// const bodyParser= require("body-parser");
// const app= express();


// app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static("public"));
// app.get("/",function(req,res){

//     res.sendFile(__dirname+"/index.html");
//     app.post("/",function(req,res){
//         console.log(req.body.cityname);
//         //console.log("Post request received")
        
//         const url="https://api.openweathermap.org/data/2.5/weather?appid=95670849c9a77233957cc1e41d0fe27f&q=Robertsganj&units=metric"
//         https.get(url,function(response){
        

//         response.on("data",function(data){
//             // console.log(data);
//             const weatherData=JSON.parse(data)
//             console.log(weatherData)
//             const tempData=weatherData.main.temp
//             console.log(tempData,"C")
//             console.log(weatherData.weather[0].description)
//             const iconid=weatherData.weather[0].icon
//             const imgLogo="https://openweathermap.org/img/wn/"+iconid+"@2x.png"

//             // const object={
//             //     name:"pk78",
//             //     favFood:"rajma"
//             // }
//             // console.log(JSON.stringify(object))
//             res.write("<h1> The weather is currently "+weatherData.weather[0].description+"</h1>")
//             res.write("<h3>The temperature of "+req.body.cityname+" is "+tempData+" degree celsius"+"</h3>")
//             res.write("<img src="+imgLogo+">")
//             res.send()
//         })
//     })
//     // res.send("Server is open and running.");

//     })



    
    
// })

// app.listen(3000,function(){
//     console.log("App started at port 3000");
// })



const express =require("express");
const bodyParser = require("body-parser");
const ejs=require("ejs");


const app=express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/",function(req,res){
    
    res.render("home");


});

// app.post("/",function(req,res){
//     res.redirect("/");
// });



app.get("/contact",function(req,res){

    res.render("contact");


});

app.post("/contact",function(req,res){
    let querryName=req.body.querryInputName;
    let querryEmail=req.body.querryInputEmail;
    let querryWrite=req.body.querryWriteUs;

    console.log(querryName);
    console.log(querryEmail);
    console.log(querryWrite);
    
    res.send("Successfully")
});


app.get("/about",function(req,res){
    
    res.render("about");


});
app.get("/educators",function(req,res){
    
    res.render("educators");


});
app.get("/facility",function(req,res){
    
    res.render("facility");


});
app.get("/achievement",function(req,res){
    
    res.render("achievement");


});
app.get("/academics",function(req,res){
    
    res.render("academics");


});



app.listen(3000,function(){
    console.log("Server started at port 3000");
});