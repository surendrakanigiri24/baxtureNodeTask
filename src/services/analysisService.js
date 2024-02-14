const fileModel = require("../clients/db/models/files.model");
const analysisModel = require("../clients/db/models/analysis.model");


// 
// Looking for file in files table
const lookUpForFileId = async(file_id) => {
    // 1. Looking in DB for file
    const fileIdRes = await fileModel.findByPk(file_id);
    if(fileIdRes == null){
        return null
    }
    return fileIdRes.file_id;
}

// 
// Creating a task to start analysis
const createAnalysisTask = async (file_id, analysis_ops, options) => {
    try{

        // 1. Creating a record in DB
        const createTask = await analysisModel.create({
            file_id: file_id,
            data:{ analysis_ops : analysis_ops, options: options }
        });

        // 2. Response to controller
        return createTask;
    }
    catch(error){
        console.error(`Error at createAnalysisTask:  ${error}`);
        throw error;
    }
    
}


module.exports = {
    lookUpForFileId,
    createAnalysisTask,
}