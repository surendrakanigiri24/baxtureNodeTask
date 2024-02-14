const config = require("../config");
const fileModel = require("../clients/db/models/files.model");
const analysisModel = require("../clients/db/models/analysis.model");
const { countWords, countUniqueWords, findTopKWords } = require("./textAnalysis");


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

// 
// doAnalysis
const doAnalysis = async (task_id) => {
    // 1. Checking for task 
    const analysisTaskDetails = await analysisModel.findByPk(task_id);
    if(analysisTaskDetails == null){
        throw new Error('Task not found');
    }

    // 2. Having file data
    const file = await fileModel.findByPk(analysisTaskDetails.file_id);
    if (!file) {
        throw new Error('File not found');
    }

    // 3. Converting buffer to text
    const text = file.buffer.toString('utf8');

    // 4. Switch case to perform analysis ops
    switch (analysisTaskDetails.data.analysis_ops) {
        case config.Analysis_Operations[0]:
          results = await countWords(text);
          break;
        case config.Analysis_Operations[1]:
          results = await countUniqueWords(text);
          break;
        case config.Analysis_Operations[2]:
          results = await findTopKWords(text, analysisTaskDetails.data.options);
          break;
        default:
          throw new Error('Invalid analysis operation');
    }

    // 5. Return results
    return results;
}

module.exports = {
    lookUpForFileId,
    createAnalysisTask,
    doAnalysis,
}