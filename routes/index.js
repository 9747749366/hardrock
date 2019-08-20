var express = require('express');
var router = express.Router();
var path = require('path');
var config = require('../config/config')

var nodemailer = require('nodemailer');
var handlebars = require('handlebars');
var fs = require('fs');


var readHTMLFile = function (path, callback) {
    fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
        if (err) {
            throw err;
            callback(err);
        } else {
            callback(null, html);
        }
    });
};


router.get('/index.html', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'app', 'views/index.html'));
});
router.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'app', 'views/index.html'));
});
router.get('/about-us.html', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'app', 'views/about-us.html'));
});
router.get('/projects.html', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'app', 'views/projects.html'));
});
router.get('/contact-us.html', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'app', 'views/contact-us.html'));
});


router.post('/contact-us', function (req, res, next) {

    readHTMLFile(path.join(__dirname, '../', 'app', 'views/email/contact_us.html'), function (err, html) {
            var template = handlebars.compile(html);
            var replacements = req.body;

            var transporter = nodemailer.createTransport(config.mail);
            var mailOptions = {
                from: '"info" <info@rosepetalshealthcare.co.uk>', // sender address
                to: config.mail_list, // list of receivers
                subject: 'Contact Us',
                text: '',
                html: template(replacements)
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: ' + info.response);
            });
        }
    );


    res.json({"success": true});
});

module.exports = router;