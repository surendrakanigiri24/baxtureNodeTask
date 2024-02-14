

const CONFIG = {

    // DB config
    DB_NAME:process.env.DB_NAME,
    DB_PASS:process.env.DB_PASS,
    DB_USER:process.env.DB_USER,
    DB_HOST:process.env.DB_HOST,
    DB_PORT:process.env.DB_PORT,

    // ERROR STATUS CODES
    ERROR_STATUS_CODES:{
        internalErrorCode: 500,
        methodInvalidErrorCode: 404,
        successStatusCode:200,
    },

    // ERROR MESSAGES
    ERROR_MESSAGES: {
        GenericInternalServerErrorMessage: {
          message: "Oops! It looks like something went wrong. We're sorry for the inconvenience.- 🤷🏼‍♂️ "       
        },
        methodInvalidErrorMessage: {
          message : "Oops! It seems like there's an issue with the way your request is being made. If the problem persists, our team is here to help!"
        }
    }
}

module.exports = CONFIG;