


const express =require("express");
const bodyParser = require("body-parser");
const https= require("https");
const ejs=require("ejs");
const nodemailer = require("nodemailer");


const app=express();
const testAccount = nodemailer.createTestAccount();
var tempData ;
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));





app.get("/",function(req,res){

    var tempData ;
        const url="https://api.openweathermap.org/data/2.5/weather?appid=d68b18a3dc51d1bd2f30d2db951db030&q=robertsganj&units=metric"
        https.get(url,function(response){
            response.on("data",function(data){
            // console.log(data);
            const weatherData=JSON.parse(data)
            tempData=weatherData.main.temp;
            const iconid=weatherData.weather[0].icon
            const imgLogo="https://openweathermap.org/img/wn/"+iconid+"@2x.png"

            
            res.render("home",{temperatureData:tempData,temperatureImgLogo:iconid});
        })
    });
    // console.log(tempData,"C")
    // res.render("home",{temperatureData:tempData});


});





app.get("/contact",function(req,res){

    // res.sendFile(__dirname+"/views/contact.ejs");
    var tempData ;
    const url="https://api.openweathermap.org/data/2.5/weather?appid=d68b18a3dc51d1bd2f30d2db951db030&q=robertsganj&units=metric"
        https.get(url,function(response){
            response.on("data",function(data){
            // console.log(data);
            const weatherData=JSON.parse(data)
            tempData=weatherData.main.temp;
            const iconid=weatherData.weather[0].icon
            const imgLogo="https://openweathermap.org/img/wn/"+iconid+"@2x.png"

            
            res.render("contact",{temperatureData:tempData,temperatureImgLogo:iconid});
        })
    });

    


});

app.post("/contact",function(req,res){
    let querryName=req.body.querryInputName;
    let querryEmail=req.body.querryInputEmail;
    let querryWrite=req.body.querryWriteUs;

    console.log(querryName);
    console.log(querryEmail);
    console.log(querryWrite);

    

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'freddie.ondricka42@ethereal.email',
            pass: 'JVKEBV9J2Wya9s4cPK'
        }
    });
    let message = {
        from: 'Sender Name <nitinkushwaha1231@gmail.com>',
        to: 'Recipient <priyanshukushwaha311@gmail.com>',
        subject: 'Querry related to umeed',
        text: querryWrite,
        html: querryWrite,
    };


    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log('Error occurred. ' + err.message);
            return process.exit(1);
        }

        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });





    
    // res.send("Successfully")
    var tempData ;
    const url="https://api.openweathermap.org/data/2.5/weather?appid=d68b18a3dc51d1bd2f30d2db951db030&q=robertsganj&units=metric"
    https.get(url,function(response){
        response.on("data",function(data){
        // console.log(data);
        const weatherData=JSON.parse(data)
        tempData=weatherData.main.temp;
        const iconid=weatherData.weather[0].icon
        const imgLogo="https://openweathermap.org/img/wn/"+iconid+"@2x.png"

        
        res.render("contact",{temperatureData:tempData,temperatureImgLogo:iconid});
    })
});


   

   
});


app.get("/about",function(req,res){
    var tempData ;
    const url="https://api.openweathermap.org/data/2.5/weather?appid=d68b18a3dc51d1bd2f30d2db951db030&q=robertsganj&units=metric"
        https.get(url,function(response){
            response.on("data",function(data){
            // console.log(data);
            const weatherData=JSON.parse(data)
            tempData=weatherData.main.temp;
            const iconid=weatherData.weather[0].icon
            const imgLogo="https://openweathermap.org/img/wn/"+iconid+"@2x.png"

            
            res.render("about",{temperatureData:tempData,temperatureImgLogo:iconid});
        })
    });
    
    


});
app.get("/login",function(req,res){
    var tempData ;
    const url="https://api.openweathermap.org/data/2.5/weather?appid=d68b18a3dc51d1bd2f30d2db951db030&q=robertsganj&units=metric"
        https.get(url,function(response){
            response.on("data",function(data){
            // console.log(data);
            const weatherData=JSON.parse(data)
            tempData=weatherData.main.temp;
            const iconid=weatherData.weather[0].icon
            const imgLogo="https://openweathermap.org/img/wn/"+iconid+"@2x.png"

            
            res.render("login",{temperatureData:tempData,temperatureImgLogo:iconid});
        })
    });
    
    


});
app.get("/academics/educators",function(req,res){
    var tempData ;
    const url="https://api.openweathermap.org/data/2.5/weather?appid=d68b18a3dc51d1bd2f30d2db951db030&q=robertsganj&units=metric"
        https.get(url,function(response){
            response.on("data",function(data){
            // console.log(data);
            const weatherData=JSON.parse(data)
            tempData=weatherData.main.temp;
            const iconid=weatherData.weather[0].icon
            const imgLogo="https://openweathermap.org/img/wn/"+iconid+"@2x.png"

            
            res.render("educators",{temperatureData:tempData,temperatureImgLogo:imgLogo});
        })
    });
    
    


});
app.get("/academics/children",function(req,res){
    var tempData ;
    const url="https://api.openweathermap.org/data/2.5/weather?appid=d68b18a3dc51d1bd2f30d2db951db030&q=robertsganj&units=metric"
        https.get(url,function(response){
            response.on("data",function(data){
            // console.log(data);
            const weatherData=JSON.parse(data)
            tempData=weatherData.main.temp;
            const iconid=weatherData.weather[0].icon
            const imgLogo="https://openweathermap.org/img/wn/"+iconid+"@2x.png"

            
            res.render("children",{temperatureData:tempData,temperatureImgLogo:imgLogo});
        })
    });
    
    


});

app.get("/academics/currentpost",function(req,res){
    var tempData ;
    const url="https://api.openweathermap.org/data/2.5/weather?appid=d68b18a3dc51d1bd2f30d2db951db030&q=robertsganj&units=metric"
        https.get(url,function(response){
            response.on("data",function(data){
            // console.log(data);
            const weatherData=JSON.parse(data);
            tempData=weatherData.main.temp;
            const iconid=weatherData.weather[0].icon
            const imgLogo="https://openweathermap.org/img/wn/"+iconid+"@2x.png"

            
            res.render("currentpost",{temperatureData:tempData,temperatureImgLogo:imgLogo});
        })
    });

});


app.get("/academics/timetable",function(req,res){
    var tempData ;
    const url="https://api.openweathermap.org/data/2.5/weather?appid=d68b18a3dc51d1bd2f30d2db951db030&q=robertsganj&units=metric"
        https.get(url,function(response){
            response.on("data",function(data){
            // console.log(data);
            const weatherData=JSON.parse(data);
            tempData=weatherData.main.temp;
            const iconid=weatherData.weather[0].icon
            const imgLogo="https://openweathermap.org/img/wn/"+iconid+"@2x.png"

            
            res.render("timetable",{temperatureData:tempData,temperatureImgLogo:imgLogo});
        })
    });

});
app.get("/academics/classes",function(req,res){
    var tempData ;
    const url="https://api.openweathermap.org/data/2.5/weather?appid=d68b18a3dc51d1bd2f30d2db951db030&q=robertsganj&units=metric"
        https.get(url,function(response){
            response.on("data",function(data){
            // console.log(data);
            const weatherData=JSON.parse(data);
            tempData=weatherData.main.temp;
            const iconid=weatherData.weather[0].icon
            const imgLogo="https://openweathermap.org/img/wn/"+iconid+"@2x.png"

            
            res.render("classes",{temperatureData:tempData,temperatureImgLogo:imgLogo});
        })
    });

});

app.get("/achievement/gallery",function(req,res){
    var tempData ;
    const url="https://api.openweathermap.org/data/2.5/weather?appid=d68b18a3dc51d1bd2f30d2db951db030&q=robertsganj&units=metric"
        https.get(url,function(response){
            response.on("data",function(data){
            // console.log(data);
            const weatherData=JSON.parse(data)
            tempData=weatherData.main.temp;
            const iconid=weatherData.weather[0].icon
            const imgLogo="https://openweathermap.org/img/wn/"+iconid+"@2x.png"

            
            res.render("gallery",{temperatureData:tempData,temperatureImgLogo:imgLogo});
        })
    });
    
    


});

app.get("/acheivement/results",function(req,res){
    var tempData ;
    const url="https://api.openweathermap.org/data/2.5/weather?appid=d68b18a3dc51d1bd2f30d2db951db030&q=robertsganj&units=metric"
        https.get(url,function(response){
            response.on("data",function(data){
            // console.log(data);
            const weatherData=JSON.parse(data)
            tempData=weatherData.main.temp;
            const iconid=weatherData.weather[0].icon
            const imgLogo="https://openweathermap.org/img/wn/"+iconid+"@2x.png"

            
            res.render("results",{temperatureData:tempData,temperatureImgLogo:imgLogo});
        })
    });
    
    


});
app.get("/facility/support",function(req,res){
    var tempData ;
    const url="https://api.openweathermap.org/data/2.5/weather?appid=d68b18a3dc51d1bd2f30d2db951db030&q=robertsganj&units=metric"
        https.get(url,function(response){
            response.on("data",function(data){
            // console.log(data);
            const weatherData=JSON.parse(data)
            tempData=weatherData.main.temp;
            const iconid=weatherData.weather[0].icon
            const imgLogo="https://openweathermap.org/img/wn/"+iconid+"@2x.png"

            
            res.render("support",{temperatureData:tempData,temperatureImgLogo:imgLogo});
        })
    });
    
});

app.get("/facility/sport",function(req,res){
    var tempData ;
    const url="https://api.openweathermap.org/data/2.5/weather?appid=d68b18a3dc51d1bd2f30d2db951db030&q=robertsganj&units=metric"
        https.get(url,function(response){
            response.on("data",function(data){
            // console.log(data);
            const weatherData=JSON.parse(data)
            tempData=weatherData.main.temp;
            const iconid=weatherData.weather[0].icon
            const imgLogo="https://openweathermap.org/img/wn/"+iconid+"@2x.png"

            
            res.render("sport",{temperatureData:tempData,temperatureImgLogo:imgLogo});
        })
    });
    
});app.get("/facility/exam",function(req,res){
    var tempData ;
    const url="https://api.openweathermap.org/data/2.5/weather?appid=d68b18a3dc51d1bd2f30d2db951db030&q=robertsganj&units=metric"
        https.get(url,function(response){
            response.on("data",function(data){
            // console.log(data);
            const weatherData=JSON.parse(data)
            tempData=weatherData.main.temp;
            const iconid=weatherData.weather[0].icon
            const imgLogo="https://openweathermap.org/img/wn/"+iconid+"@2x.png"

            
            res.render("exam",{temperatureData:tempData,temperatureImgLogo:imgLogo});
        })
    });
    
});app.get("/facility/library",function(req,res){
    var tempData ;
    const url="https://api.openweathermap.org/data/2.5/weather?appid=d68b18a3dc51d1bd2f30d2db951db030&q=robertsganj&units=metric"
        https.get(url,function(response){
            response.on("data",function(data){
            // console.log(data);
            const weatherData=JSON.parse(data)
            tempData=weatherData.main.temp;
            const iconid=weatherData.weather[0].icon
            const imgLogo="https://openweathermap.org/img/wn/"+iconid+"@2x.png"

            
            res.render("library",{temperatureData:tempData,temperatureImgLogo:imgLogo});
        })
    });
    
});
app.get("/achievement",function(req,res){
    var tempData ;
    const url="https://api.openweathermap.org/data/2.5/weather?appid=d68b18a3dc51d1bd2f30d2db951db030&q=robertsganj&units=metric"
        https.get(url,function(response){
            response.on("data",function(data){
            // console.log(data);
            const weatherData=JSON.parse(data)
            tempData=weatherData.main.temp;
            const iconid=weatherData.weather[0].icon
            const imgLogo="https://openweathermap.org/img/wn/"+iconid+"@2x.png"

            
            res.render("achievement",{temperatureData:tempData,temperatureImgLogo:imgLogo});
        })
    });
    



});
app.get("/academics",function(req,res){
    var tempData ;
    const url="https://api.openweathermap.org/data/2.5/weather?appid=d68b18a3dc51d1bd2f30d2db951db030&q=robertsganj&units=metric"
        https.get(url,function(response){
            response.on("data",function(data){
            // console.log(data);
            const weatherData=JSON.parse(data)
            tempData=weatherData.main.temp;
            const iconid=weatherData.weather[0].icon
            const imgLogo="https://openweathermap.org/img/wn/"+iconid+"@2x.png"

            
            res.render("academics",{temperatureData:tempData,temperatureImgLogo:iconid});
        })
    });
    
    


});



app.listen(3000,function(){
    console.log("Server started at port 3000");
});