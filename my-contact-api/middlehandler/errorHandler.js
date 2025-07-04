const {constants}= require("../constants")
const errorHandler = (err,req,res,next)=> {

    
    const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDAION_ERROR:
        res.json({title:"Validatio Error",message:err.message});
        break;
    case constants.NOT_FOUND:
        res.json({title:"Not Found",message:err.message});
        case constants.UNAUHORIZED:
        res.json({title:"Unauthorized",message:err.message});
        case constants.FORBIDDEN:
        res.json({title:"Forbidden",message:err.message});
        case constants.SERVER_ERROR:
        res.json({title:"Server Error",message:err.message});
    default:
        console.log("No Error, a=allgood!");
        break;
  }
    
};
module.exports = errorHandler;
