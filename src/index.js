require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON data in request body
app.use(express.json());

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