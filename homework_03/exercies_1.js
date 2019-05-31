const {promisify}=require("util");
const dns=require('dns');
const resolveAsync=promisify(dns.resolve4);
async function getIps(domainName){
try{
    let result=await resolveAsync(domainName);
    console.log(result);
}
catch(err){
console.log(err);
}
}

getIps("www.mum.edu");
