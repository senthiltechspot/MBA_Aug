const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const dbConfigs = require("./src/configs/db.configs");
const serverConfigs = require("./src/configs/server.configs");


const app = express();



mongoose.connect(dbConfigs.DB_URL)
.then(()=>{
    console.log("connected to DB successfully");
})


app.listen(serverConfigs.PORT, ()=>{
    console.log(`Application is running on PORT ${serverConfigs.PORT}`)
})