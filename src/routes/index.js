const express = require("express");
const router = express.Router();
const asyncHanlder = require('express-async-handler');
const controller = require("../controller");

// Sample route
router.get( "/",
    asyncHanlder(controller.sampleRoute)
);

// Export
module.exports = router;