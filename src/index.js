const express=require("express");
const bodyParser = require("body-parser");

require("dotenv").config();

const {PORT}=require('./config/serverconfig');
const {City} = require('./models/index');
const CityRepository=require('./repository/city-repository');

const setup = async()=>{
    const app=express();


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, async ()=>{
        console.log(`Server is running on port ${PORT}`);
    }) 
}


setup();