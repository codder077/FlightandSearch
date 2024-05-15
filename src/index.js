const express=require("express");
const bodyParser = require("body-parser");

require("dotenv").config();

const {PORT}=require('./config/serverconfig');

const setup = async()=>{
    const app=express();


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    })
}


setup();