require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const CONFIG = require("./config");

// Middleware to parse JSON data in request body
app.use(express.json());

//Error Handler configure
const  errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

// Routes forwarding
const routes = require("./routes");
app.use("/", routes);

// Catch-all route for non-existent routes
app.use((req, res) => {
    res.status(CONFIG.ERROR_STATUS_CODES.methodInvalidErrorCode).send(CONFIG.ERROR_MESSAGES.methodInvalidErrorMessage);
    return;
});


// PORT CONFIG
const server = app.listen( PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
  
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`${PORT} is already in use`);
    } else {
        console.error(err);
    }
});