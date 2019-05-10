const express = require('express');
const app = express();
const PORT = 4000;

//controllers
const controller = require('./controller')





app.listen(PORT, () => { 
    console.log(`server started on port ${PORT} `)
})
