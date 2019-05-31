const express=require('express');
const app=express();
const axios=require('axios');
const {from}=require('rxjs');
const{shareReplay}=require('rxjs/operators');

app.enable('trust proxy');
app.enable('strict routing');
app.set('etag','strong');
app.set('x-powered-by',false);

app.get('/users',function(req,res){
    const obs= from(axios.get('https://randomuser.me/api/?results=10'));
    obs.pipe(
        shareReplay(1)
    ).subscribe((data)=>{
        res.set('link','<https://randomuser.me/api/?page=2&results=10&seed=abc>; rel="next"');
        res.json(data.data.results);
        res.end();
    });
});
app.listen(8080,()=>console.log("I'm listening on 8080"));