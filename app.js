const http = require('http');

const express = require('express');
const app = express();
app.use((req, res, next) => {
    console.log('1st middleware');
    next();//goes to next app.use()
});

app.use((req, res, next) => {
    console.log('2nd middleware');
    res.send('<h1>hello</h1>');
});

const server = http.createServer(app);

server.listen(3000);