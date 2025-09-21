import mongoose from "mongoose";
import { DB_NAME } from "./constansts.js";
import express from "express";
const app = express();


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