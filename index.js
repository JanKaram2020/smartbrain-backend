const express = require('express');
const app = express();
app.use(((req,res, next) => {
    console.log(req.url);
    next()
}));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

app.listen(3000);