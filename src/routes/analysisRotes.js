const express = require('express');
const asyncHanlder = require('express-async-handler');
const analysisController = require('../controller/analysisController');

const router = express.Router();

router.post('/initiateAnalysis', 
    asyncHanlder(analysisController.initiateAnalysis)
);

router.get('/:task_id',
    asyncHanlder(analysisController.getAnalysisResults)
);

module.exports = router;