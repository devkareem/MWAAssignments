const express=require('express');
const bodyParser=require('body-parser')
const fs=require('fs');
const morgan=require('morgan');
const path=require('path');
const cors=require('cors');
const helmet=require('helmet');
const app=express();
const isJson=require('./custome-middelware/checkJson');
const accessLog=fs.createWriteStream(path.join(__dirname,'access.log'),{flags:'a'});
app.use(cors());
app.use(helmet());
app.use(morgan('combined',{stream:accessLog}));


app.use(bodyParser.json());
app.use(isJson);



app.use('/api',require('./modules/gradesRoute.js'));

app.use((err,req,res,nex)=>{
    console.error(err.stack);
    res.status(500).json({status:'error',data:err.message});
});
app.listen(8020,()=>console.log("I'm listening on 8020"));