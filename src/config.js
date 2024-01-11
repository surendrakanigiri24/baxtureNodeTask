

const CONFIG = {

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