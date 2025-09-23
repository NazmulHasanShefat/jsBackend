// import mongoose from "mongoose";
import express from "express";
import cors from "cors";
// server theke user er cookie zeno access korte pari and delete korote pari 
// ei cookie সুধু মাত্র server e read delete বা cookies set ও করতে পারি। CRUD oparation চালাতে পারি sefely user er browser e 
// ei cookie only server e handle korote parbe onno kew access korte parbe na
// ejonno cookie-parser use kora hoy.  
import cookieParser from "cookie-parser";
const app = express();

// app.use amra tokhn use kori zokhon amader kono middleware ba configaretion settings korte hoy.
// CORS mean cross origin resourse shereing
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

// json formate এ কত সাইজ এর ডেটা আসতে পারবে তার লিমিট configure kore দিলাম। 
app.use(express.json({limit: "15kb"}));
// url thheke koto size er data aste parbe ek request e
app.use(express.urlencoded({extended: true, limit:"10kb"}))
// amra kono kono somoy files folder store korte chai amar nijer server e public name er folder e 
// ejonno express.static("public"), er mane amora public er moddle pdf, picture, videos rakhte pari tar
// jonno ei configuration kora holo zeta ze keu access korote parbe. ei public একটা folder er name eta 
// zekono name hote pare
app.use(express.static("public"))

// server theke user er browser er cookies zeno access korte pari and  cookies set ooo korte pari
// cookie er moddle sucurely crud opatation korte pari কিছ পদ্ধতি আছে যখান থেকে সিকিউর cookies user 
// er browser e রাখতে পারি সেই  cookie sudhu amar server e read korte parbe onno keu read korte parbe na
app.use(cookieParser())



// routes import
import userRouter from "./routes/user.routes.js"

// routes declaretion
app.use("/api/v1/users", userRouter )

export { app };