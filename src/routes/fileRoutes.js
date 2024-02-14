const express = require("express");
const multer = require('multer');
const asyncHanlder = require('express-async-handler');
const fileController = require("../controller/fileController");

const router = express.Router();
const upload = multer({ });

// Sample route
router.get( "/",
    asyncHanlder(fileController.sampleRoute)
);

// File upload route
router.post("/uploadFile",
    upload.single('file'),
    asyncHanlder(fileController.fileUpload)
);

// Export
module.exports = router;