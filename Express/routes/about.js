var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('about', {
        title: 'About',
        developer: 'Sammiie' //added another variable
    });
});

module.exports = router;
