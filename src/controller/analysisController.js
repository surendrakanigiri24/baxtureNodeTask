const config = require("../config");
const analysisService = require("../services/analysisService");

//
// Intializing anlysis by creating task
const initiateAnalysis = async(req,res) => {
    const { file_id, analysis_ops, options } = req.body;

    // 1. Input validation
    if(!file_id){
        res.status(config.ERROR_STATUS_CODES.incompleteData).json({ message: "Missing file_id param from body"});
        return;
    }
    else if(!analysis_ops){
        res.status(config.ERROR_STATUS_CODES.incompleteData).json({ message: "Missing analysis_ops param from body"});
        return;
    }
    else if(analysis_ops === 'findTopKWords' && !options){
        res.status(config.ERROR_STATUS_CODES.incompleteData).json({ message: "Missing options param from body"});
        return;
    }

    // 2. Check for valid analysis_ops input
    if(!config.Analysis_Operations.includes(analysis_ops)){
        res.status(config.ERROR_STATUS_CODES.incompleteData).json({ message: "Not a valid analysis operation "});
        return;
    }

    // 3. Check for file_id
    const fileExists = await analysisService.lookUpForFileId(file_id);
    if(fileExists == null){
        res.status(config.ERROR_STATUS_CODES.incompleteData).json({ message: "File not exists you are looking for "});
        return;
    }

    // 4. Create task
    const task = await analysisService.createAnalysisTask(file_id, analysis_ops, options);

    // 5. Response to client
    res.status(config.ERROR_STATUS_CODES.dataCreatedCode).json({ taskId : task.task_id });
    return;
}


module.exports = {
    initiateAnalysis,
}