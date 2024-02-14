const fileModel = require("../clients/db/models/files.model");

// 
// File upload service
const uploadFile = async(file) => {
    try{
        // 1. Deconstructing file data
        const { originalname, buffer } = file;

        // 2. Creating record in DB
        const uploadFile = await fileModel.create({
            file_name: originalname,
            buffer:buffer
        });

        // 3. Response to controller
        return uploadFile;
    }
    catch(error){
        console.error(`Error at uploadFile:  ${error}`);
        throw error;
    }
}

module.exports = {
    uploadFile,
}