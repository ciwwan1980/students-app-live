

var myLogger = function (req, res, next) {
    // console.log(req)
    console.log(req.body); 
    // console.log(originalUrl, "originalUrl")
    let url=req.originalUrl; 
    let load=req.body; 
    console.lslog(`${req.method} on ${url}`)

    next()
}

module.exports = myLogger;