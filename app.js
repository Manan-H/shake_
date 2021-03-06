/**
 * Created by tigra on 06-Nov-18.
 */
const express = require('express');
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(require('cors')());


app.use('/', require('./routes/index'));



app.use('/', (req, res)=>{
    res.status(404).json({
        message: "Not Found"
    })
});


module.exports = app;