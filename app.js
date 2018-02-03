const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const useragent = require('express-useragent');
var app = express();
 
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

app.get('/api/whoami', function(req, res) { 
   
    var ip = req.ip;
    var language = req.acceptsLanguages()[0];
    var software = `OS: ${req.useragent.os}, Browser: ${req.useragent.browser}`;

    res.json({ip, language, software});
});

app.listen(3000, function(){
    console.log("listening on port 3000")
});