import mongoose, { Schema } from "mongoose";
// user zokhon signup kore tokhon server tar browser er cookie te 
// ekta token pathay and sei token browser e save hoye zay 
// amra এই  token er মেয়াদ নির্দিষ্ট kore dite pari ze sei token 
// ek din por remove hoye zabe se zodi ek din login na kore 
// tahole sei token expire hoye zabe 

// এই টকেন kaje lage zokhon user browser close korar pore 
// abar sei domain a enter kore tokhon sei token er maddome
// take চিনহিত kora hoy ze tar kase token ase sei token
// server er token er sathe mele ki na ? zodi mele tokhon 
// automatic login koriye dewa hoy.  
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt"


const userSchema = new Schema(
    {
        // index: true, ----- becouse it's helps database search userName 
         // এখানে trim:true দিলে userName ফিল্ডে বাড়তি স্পেস মুছে যাবে
       userName: {type: String, required: true, unique: true, lowerCase: true, trim: true, index: true},
       email: {type: String, required: true, unique: true, lowerCase: true, trim: true},
       fullName: {type: String, required: true, trim: true, index: true},
       avatar: {type: String, /*cloudinary URL is string becouse it is string */ required: true},
       coverImage: {type: String, /*cloudinary URL is string becouse it is string */},
       watchHistory: [{type: Schema.Types.ObjectId, ref: "Video"}],
       password: {type: String, required: [true, "password is reqired!"]},
       refreshToken: {type: String},

    },{timestamps: true}
)

userSchema.pre("save", async function (next,) {
    if(!this.isModifide("password")){
        return next();
    }
    this.password = bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect == async function (password) {
  return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function () {
   return jsonwebtoken.sign(
        {
             _id: this._id,
            email: this.email,
            userName: this.userName,
            fullName: this.fullName
       },
       process.env.ACCESS_TOKEN_SECRET,
       {
          expiresIn: process.env.ACCESS_TOKEN_EXPIRY
       }
  )
}
userSchema.methods.generateRefreshToken = function () {
       return jsonwebtoken.sign(
        {
             _id: this._id,
            email: this.email,
            userName: this.userName,
            fullName: this.fullName
       },
       process.env.ACCESS_TOKEN_SECRET,
       {
          expiresIn: process.env.ACCESS_TOKEN_EXPIRY
       }
  )
}

export const User = mongoose.model("User", userSchema)