var express = require('express');
var router = express.Router();
var customerVar = require('../model/customerModel.js'); //customerVar is connected to customerModel.js
var assert = require('assert');
var nodemailer = require('nodemailer');

/*var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
  //  auth: {
   //     user: "",
      //  pass: ""
   // }
});*/



router.get('/', function(req,res){
    customerVar.find({}, function(err,customer){ //customer is a variable that is connected to schema
    if (err)
    {
    res.send('something is really wrong!!');
    next();
    }
      
    res.json(customer);
    
    });
    });  

    router.get('/get', function (req, res) {
        console.log('I received a GET request');
        customerVar.find({}, function(err, customers) {
            if(!err){
               res.send(customers);
              //res.sendFile('index1.html');
              //res.sendFile(__dirname + '/index.html');
              //res.render('index1.html');
            }
            else{
                res.send('could not retrived data');
            }
    
        });
    
    });

    /* router.post('/send-email', function(req,res){
        var mailOptions={
            name : "Spurthi",
            email : "spurthi.hegde@gmail.com",
            message : "hi"
        }
        console.log(mailOptions);
        smtpTransport.sendMail(mailOptions, function(error, response){
         if(error){
                console.log(error);
            res.send("error");
         }else{
                console.log("Message sent: " + response.message);
            res.send("sent");
             }
    });
    }); */

    router.post('/send-email', function(req,res){
       
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            //secure: false,
            port: 25,
            auth: { 
            user: 'serveonalert@gmail.com',
            pass: 'testpassword'
            },
            tls: {
            rejectUnauthorized: false
            }
            });
          
           let HelperOptions = {
            from: '"Need Alert" <serveonalert@gmail.com>',
            to: 'serveonalert@gmail.com',
            subject: 'Immediate Action Required',
            text: 'You need to collect information'
            };
          
          
            transporter.sendMail(HelperOptions, (error, info) => {
                if(error)
                {
                return console.log(error);
                }
                Console.log("The message was sent!");
                Console.log(info);
                });
                
    });

    
    
   
   
    

router.get('/custData',function(req,res){
    res.json('Customer Data getting');
})

router.post('/sampleApp4', function(req,res)
{
  var customerInfo= new customerVar();
  customerInfo.name= req.body.name;
  customerInfo.component= req.body.component;
  customerInfo.place= req.body.place;
  customerInfo.latitude= req.body.latitude;
  customerInfo.longitude= req.body.longitude;


customerInfo.save()
.then(item => {
res.send("item saved to database");
})
.catch(err => {
res.status(400).send("unable to save to database");
});
});




module.exports = router;




