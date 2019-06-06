const express = require('express');
const bodyJson = require('body-parser');
const baseUrl = "/lectures/";
const ObjectId = require('mongodb').ObjectID;

const app = express();

app.use(bodyJson.json());
app.use(require('./dbManager'));

app.get(baseUrl, async function (req, res, next) {
    try {
        const lectures = await req.db.collection('lectures').find({}).toArray();
        
        res.status(200).json({ status: 'Ok', data: lectures })
    } catch (err) {
        return next(err);
    }

});
app.get(baseUrl + ":id", async function (req, res, next) {
    const id = req.params.id;
    try {
        const datain = await req.db.collection('lectures').findOne({ '_id': new ObjectId(id) });
        res.status(200).json({ status: 'Ok', data: datain });

    } catch (err) {
        return next(err);

    }
});
app.post(baseUrl, (req, res, next) => {
    req.db.collection('lectures').insertOne(req.body, function (err, docInc) {
        if (docInc) {
            res.status(201).json({ status: 'Ok', data: req.body })
        }
        else {
            return next(err);
        }
    })
});
app.delete(baseUrl+":id",async (req,res,next)=>{
    const id = req.params.id;
    try {
        const datain = await req.db.collection('lectures').findOneAndDelete({ '_id': new ObjectId(id) });
        res.status(202).json({ status: 'Ok', data: datain });

    } catch (err) {
        return next(err);

    }
});

app.get( "/search/:q", async function (req, res, next) {
    const query = req.params.q;
    try {
        const lectures = await req.db.collection('lectures').find({"lecture":query}).toArray();
   
        
        res.status(200).json({ status: 'Ok', data: lectures });

    } catch (err) {
        return next(err);

    }
});
app.use((err,req,res,nex)=>{
    console.error(err.stack);
    res.status(500).json({status:'error',data:err.message});
});
app.listen(8050, () => console.log("I'm listening on port 8050"));