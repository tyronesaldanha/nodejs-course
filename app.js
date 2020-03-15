const http=require('http');
//const routes=require('./routes');//exported file route.js
const express=require('express');
const app=express();
const server=http.createServer();

server.listen(3000);