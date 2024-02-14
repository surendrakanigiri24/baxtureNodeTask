const CONFIG = require("../config");

const errorHandler = (err, req, res, next) => {

    if(err){
        console.error(`Error message from errorHandler is ${err.message}`);
        console.error(`Error stack from errorHandler is ${err.stack}`);
        
        const statusCode = CONFIG.ERROR_STATUS_CODES.internalErrorCode;
        res.status(statusCode).json(CONFIG.ERROR_MESSAGES.GenericInternalServerErrorMessage);
        return;
    }
    
    next();

};
  

module.exports = errorHandler;
  