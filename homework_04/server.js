const {Subject}=require('rxjs');
const http=require('http');
const {fork}=require('child_process');
const url=require('url');
const subject=new Subject();

subject.subscribe(function(request){
const myUrl=url.parse(request.req.url,true);
const cP=fork('readFile.js');
cP.send(myUrl.query);

cP.on('message',(message)=>{
    request.res.end(message);
    console.log(cP.pid);
});
});

http.createServer(function(req,res){
    subject.next({req,res});
})
.listen(3000);
