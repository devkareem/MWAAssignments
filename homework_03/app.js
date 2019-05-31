const gym=require('./Gym');

const gymObj=new gym();

gymObj.on("boom",()=>  console.log("Athlete is working out"));
gymObj.on("finish",()=> console.log("Work out is done !"));