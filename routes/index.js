var express = require('express');
var router = express.Router();
var useragent = require('express-useragent');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index');
});

router.get('/whoami', function (req, res) {
    var language = req.headers['accept-language'].split(',')[0];
    var ip = req.ip;
    var source = req.headers['user-agent'],
        ua = useragent.parse(source);
    var software = "System: "+ua.os+"; browser: " + ua.browser;

    res.json({'language': language, 'ip':ip, 'software':software});
});

module.exports = router;
