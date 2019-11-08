var express = require('express');
var router = express.Router();
var path = require('path');
var config = require('../config/config')
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(config.sendGridAPIKey);
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
router.get('/contact-us.html', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'app', 'views/contact-us.html'));
});
router.get('/building-blocks.html', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'app', 'views/building-blocks.html'));
});
router.get('/pavers.html', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'app', 'views/pavers.html'));
});
router.get('/kerb-stone.html', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'app', 'views/kerb-stone.html'));
});
router.get('/products.html', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'app', 'views/products.html'));
});


router.post('/contact-us', function (req, res, next) {
    sgMail.send({
        to:'info@hardrockpavers.in',
        from:req.body.email,
        subject:req.body.name,
        html:`<strong>${req.body.message}</strong>`
    });
    res.json({"success": true});
});

module.exports = router;

