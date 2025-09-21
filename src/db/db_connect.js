import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "../constansts.js";


const connect_DB = async () =>{
    try {
       const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`);
       console.log(`\n mongoBD connected DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("db connection error",error);
        process.exit(1)
    }
}
export default connect_DB;