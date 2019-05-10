require('dotenv').config()

//dependencies
const express = require('express');
const app = express();
const massive = require('massive')

//env variables
const { 
    PORT,
    CONNECTION_STRING
} = process.env

//controllers
const controller = require('./controller')

//database
massive(CONNECTION_STRING)
    .then(db => { 
        console.log('connected to database')
    }).catch(err => { 
        console.log('failed to connect to database')
    })


app.listen(PORT, () => { 
    console.log(`server started on port ${PORT} `)
})
