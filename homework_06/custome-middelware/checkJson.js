
function IsValidJSONString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
module.exports = function (req, res, next) {

    if (req.method === ('POST'||'PUT'||'PATCH')) {
        //let body = '';
        // req.on('data', function (chunk) {
        //     body += chunk;
        // });
        // req.on('end', () => {
        //  const isJson=   IsValidJSONString(body);
        //  if(isJson){
        //    return  next();
        //  }
        //  else{
        //     return next(new Error("it's not a json object !"));
        //  }
        // });
        if (Object.keys( req.body).length)
            return next();
        else
            return next(new Error("it's not a json object !"));
    }
    else
        return next();

}