const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const port = 3555;
app.use(express.static(__dirname + '/public'));
const database = {
    users: [{
        id: '1',
        name: 'tony',
        email: 'tony01281349179@gmail.com',
        password: 'tony',
        entries: 0,
        joined: new Date()
    }]
}
app.get('/', ((req, res) => {
    console.log(req.url);
    res.send('/index.html')
}))
app.post('/signin', (req, res) => {
    console.log(req.body);
    if (req.body.email === database.users[0].email && req.body.password === database.users[0].password) {
        res.json('success')
    } else {
        res.status(400).json('error signing you in')
    }
})
app.listen(port, () => {
    console.log(`App running on port ${port}`)
})