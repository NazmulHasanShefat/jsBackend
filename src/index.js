// require('dotenv').config()
import { app } from "./app.js";
import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constansts.js";
import express from "express";
import connect_DB from "./db/db_connect.js";
dotenv.config({path: "./env"})
// const app = express();


// app.get("/", (req, res) => {
//     res.send("this is mongoos app")
// })

// zokhon asyncronus kaj সম্পুর্ন হয় তখন সে একটা promise return koree 
connect_DB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running on port: http://localhost:${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log(`mongobd catch a error from index.js: ${err}`)
})



// ( async ()=>{
//     try {
//        await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`)
//        app.on("error", ()=>{
//         console.log("db await connection problem",error)
//         throw error
//        })
//        app.listen(process.env.PORT, ()=>{
//         console.log(`server is running on port: ${process.env.PORT}`)
//        })
//     } catch (error) {
//         console.log("db conntection error:",error)
//         throw error
//     }
// })()