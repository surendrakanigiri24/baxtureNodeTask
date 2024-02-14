const express = require('express');
const asyncHanlder = require('express-async-handler');
const analysisController = require('../controller/analysisController');

const router = express.Router();

router.post('/initiateAnalysis', 
    asyncHanlder(analysisController.initiateAnalysis)
);

module.exports = router;