const express = require('express');
const asyncHanlder = require('express-async-handler');
const analysisController = require('../controller/analysisController');

const router = express.Router();

// Create a task
router.post('/initiateAnalysis', 
    asyncHanlder(analysisController.initiateAnalysis)
);

// To have results for task
router.get('/:task_id',
    asyncHanlder(analysisController.getAnalysisResults)
);

module.exports = router;