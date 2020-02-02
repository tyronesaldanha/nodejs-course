const fs=require('fs');

const requestHandler= (req,resp)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        
        resp.setHeader('Content-Type','text/html');
        resp.write('<html><head><title>Enter Message</title></head>');
        resp.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit" value="submit">Send</button></form></body>');
        resp.write('</html>');
        return resp.end();
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
                    resp.statusCode=302;
                    resp.setHeader('Location','/');
                    return resp.end();
                });                
            });       
    
        }    
        //resp.setHeader('Content-Type','text/html');
        resp.write('<html><head><title>Enter Message</title></head>');
        resp.write('<body><h1>yoyoyozzzzzxxz</h1></body>');
        resp.write('</html>');
        return resp.end();
    
    
};

module.exports=requestHandler;
