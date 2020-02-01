const http=require('http');
const routes=require('./routes');//exported file route.js

const server=http.createServer(routes);

server.listen(3000);