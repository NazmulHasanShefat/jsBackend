import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js"

const registerUser = asyncHandler( async (req, res) => {
    // get user details form fronted 
    // validation not empty
   //  check if user is exist match userName email
   //  files exist or not exist check for images check for avater 
   // upload them to cloudnery
   // check image has uploded cloudnery if uploded then go to next process
   // create user object becous mongodb store data as object
   // create entry in db
   // remove password and refrash token field  from response
   // check for user createion 
   // return response


   // req.body er modde sob details pawa zay user za kisu post korese url theke o asete pare form theke o asete pare
   // josn theke o asete pare
   const { fullName, userName, email, password } = req.body
   console.log("fullName: ",fullName, "email: ", email, "password: ",password)

   if(
      // ei trim ki kore sob field value ney and trim kore tarporeO zodi kono value na পায় tahole true return kore 
      // orthath ei if condition run hobe and error throw korbe 
      [ fullName, email, userName, password ].some((field)=>  field?.trim() === "")
   ){
      throw new ApiError(400, "All input fuild is required please fill the inputs",)
   }
  
   //    res.status(200).json({
   //      massage: "OK"
   //   })
} )

export { registerUser }