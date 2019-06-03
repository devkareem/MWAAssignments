const express=require('express');
const router=express.Router({caseSensitive:false,strict:true});
const baseUrl="/grades/";
let grades=require('../model/grades');
let gradesId=1;

router.get(baseUrl,(req,res)=>{
    res.status(200).json({status:'Ok',data:grades})
});
router.get(baseUrl+":id",(req,res,next)=>{
    const id=req.params.id;
    const grade= grades.find(x=>x.id==id);
    if(grade){
        req.grade=grade;
       return next();
    }
    else{
      return  next(new Error("Grade not Exists !!"));
    }

},(req,res)=>{

    res.status(200).json({status:'Ok',data:req.grade});
});

router.post(baseUrl,(req,res,next)=>{
    req.body.id = ++gradesId;
    return next();
}
    ,(req,res)=>{
    grades.push(req.body);
    res.status(201).json({status:'Ok',data:req.body})
});
router.delete(baseUrl+":id",(req,res,next)=>{
    const id=req.params.id;
    const grade= grades.find(x=>x.id==id);
    if(grade){
        req.grade=grade;
       return next();
    }
    else{
      return  next(new Error("Grade not Exists !!"));
    }
},(req,res)=>{
    const id=req.params.id;
    grades=grades.filter(el=>el.id!=id);
    res.status(202).json({status:'Ok',data:req.grade});
});
module.exports=router;