const authorize = (req,res,next)=>{
    console.log("user is authorized");
    next()
}

module.exports = authorize