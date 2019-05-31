

const http=require('http');
const fs=require('fs');
const path=require('path');
const server=http.createServer();
const serverSync=http.createServer();
const serverStream=http.createServer();

server.on("request",function(req,res){
    let startTime=new Date();
    res.writeHead(200,{'content-type':'text/html'});
   res.write(`Start Read File method with buffer technique ${startTime.toTimeString()}`);
    const rs=fs.readFile(path.join(__dirname,'big.file'),{encoding:'utf-8'},function(err,data){
        startTime=new Date();
        res.write(`<br/>  End Read File method with buffer technique ${startTime.toTimeString()}`);
        res.end(data);

    });
    
    
});
server.listen(8888,()=>console.log("My server listen on port 8888"));


serverSync.on("request",function(req,res){
    let startTime=new Date();
    res.writeHead(200,{'content-type':'text/html'});
   res.write(`Start Read File Sync method  ${startTime.toTimeString()}`);
    const rs=fs.readFileSync(path.join(__dirname,'big.file'),'utf-8');
    startTime=new Date();
    res.write(`<br/>  End Read File Sync method ${startTime.toTimeString()}`);
    res.end(rs);
    
});

serverSync.listen(8887,()=>console.log("My server listen on port 8887"));

serverStream.on("request",function(req,res){
    let startTime=new Date();
//     res.writeHead(200,{'content-type':'text/html'});
//    res.write(`Start Read File Stream method  ${startTime.toTimeString()}`);
    const rs=fs.createReadStream(path.join(__dirname,'big.file'),{encoding:'utf-8'});
   res.writeHead(200,{'content-type':'text/html'});
    rs.on('data',function(cunk){
        // startTime=new Date();
        // res.write(cunk.toString());
    });
    rs.on('end',function(){
        res.write(`Start Read File Stream method  ${startTime.toTimeString()}`);
        res.end(`End Read File Stream method  ${new Date().toTimeString()}`);

    });
    
});

serverStream.listen(8889,()=>console.log("My server listen on port 8889"));
