require('dotenv').config();
const express = require('express');
//crear una app en la variable app
const app = express(); 

//podder usar el modulo mongoose
const mongoose = require('mongoose');


//conexion al servidor mediante la URL

(async ()=> {
    try{
        await mongoose.connect(process.env.MONGO_URI_TEXT);
        console.log("conexion exitosa ");
    }catch(error) {
        console.log(error);
    }
})();

//para iniciar el servidor
module.exports = app;
