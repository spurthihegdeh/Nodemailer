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



module.exports = router;




