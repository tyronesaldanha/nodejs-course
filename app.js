const http=require('http');
const fs=require('fs');
const server=http.createServer((req,rest)=>{
    //console.log(req);
    //process.exit(); //hard exit
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        
    rest.setHeader('Content-Type','text/html');
    rest.write('<html><head><title>Enter Message</title></head>');
    rest.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit" value="submit">Send</button></form></body>');
    rest.write('</html>');
    return rest.end();
    }
    if(url==="/message"&& method==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });//listen to event
        
        req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split('=')[1];
            fs.writeFile('message.txt',message,(err)=>{
                rest.statusCode=302;
                rest.setHeader('Location','/');
                return rest.end();
            });
            //console.log(parsedBody); 
        });
       // fs.writeFileSync('message.txt','Dummy Data');
       // rest.statusCode=302;
       // rest.setHeader('Location','/');
       // return rest.end();

    }
    rest.setHeader('Content-Type','text/html');
    rest.write('<html><head><title>Enter Message</title></head>');
    rest.write('<body><h1>yoyoyo</h1></body>');
    rest.write('</html>');
    return rest.end();

});

server.listen(3000);