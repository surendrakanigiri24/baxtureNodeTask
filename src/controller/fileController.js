const config = require("../config");
const fileService = require("../services/fileService");

//This is sample route for testing
const sampleRoute = async (req,res) => {
    res.status(200).json({ message: "YAY! I am working" })
}

const fileUpload = async(req,res) => {
    // 1. Input validation
    if(!req.file){
        res.status(config.ERROR_STATUS_CODES.incompleteData).json({ message: "Missing file from body"});
        return;
    }

    // 2. Check extension of file
    const fileName = req.file.originalname;
    const fileExt = fileName.split('.').pop();
    if(fileExt.toLowerCase() != 'txt'){
        res.status(config.ERROR_STATUS_CODES.incompleteData).json({ message: "We are accepting only .txt files"});
        return;
    }

    // 3. Calling file service to create record
    const fileId = await fileService.uploadFile(req.file);

    // 4. Response to client
    res.status(config.ERROR_STATUS_CODES.dataCreatedCode).json({ fileId : fileId.file_id });
    return;
}

// 

module.exports = {
    sampleRoute,
    fileUpload,
}