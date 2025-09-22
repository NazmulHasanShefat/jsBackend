import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const UploadOnCloudinary = async (localFilePath) =>{
    try {
        if(!localFilePath) return null
        // upload the file on cloudinary
       const respose = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfully
        console.log( "file uploded successfully! on cloudinary url is:",respose.url )
        return respose;
    } catch (error) {
        fs.unlinkSync(localFilePath)  // remove the localy saved temp files as the upload oparetion got faild
        return null
    }
}

export default UploadOnCloudinary;

// cloudinary.v2.uploader.upload("hat.jpg", { 
//      use_filename: true})
// .then(result=>console.log(result));