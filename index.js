const express = require('express');
const morgan = require('morgan');
const app = express();
const pjson = require('./package.json');

app.use(morgan('dev'));

app.get('/getenv/*', function (req, res) {
    const parts = req.url.split('/');
    let msg = "";

    if (parts[2]) {
        let variable = parts[2]
        msg = `\nENVIRONMENT ${variable}\n` + process.env[variable];
    } else {
        msg = '\NnENVIRONMENT VALUES\n' + JSON.stringify(process.env, null, 4);
    }

    res.send(req.url + msg);
    console.log(msg);
});

app.get('/*', function (req, res) {
    res.send('Hello There Github actions' + '<hr>package json:' + pjson.version);
});

const APP_PORT = process.env.PORT || 3000;

const listen = app.listen(APP_PORT, function () {
    console.log(`Listening on port ` + listen.address().port);
});