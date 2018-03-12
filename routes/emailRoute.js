var express = require('express');
var router = express.Router();

var assert = require('assert');
var nodemailer = require('nodemailer');


    router.post('/send-email', function(req,res){
       
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            //secure: false,
            port: 25,
            auth: { 
            user: 'serveonalert@gmail.com',
            pass: '****************'
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




