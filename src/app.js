import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

app.use(express.json({limit: "15kb"}));
app.use(express.urlencoded({extended: true, limit:"10kb"}))
app.use(express.static("public"))

// server theke user er browser er cookies zeno access korte pari and  cookies set ooo korte pari
// cookie er moddle sucurely crud opatation korte pari কিছ পদ্ধতি আছে যখান থেকে সিকিউর cookies user 
// er browser e রাখতে পারি সেই  cookie sudhu amar server e read korte parbe onno keu read korte parbe na
app.use(express.cookieParser())


export { app };