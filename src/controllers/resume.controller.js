import cloudinary from '../utils/cloudinary.js'

async function uploadResume(req,res){
   try {
     const file = req.file
     if(!file){
         return res.status(400).json({message:"File is required!!"})
     }
     const result = await cloudinary.uploader.upload(file.path,{resource_type:"raw"})
     res.status(200).json({
         message:"Resume uploaded succesfully!!",
         resumeurl:result.secure_url
     })
     
     
   } catch (error) {
   
        console.log(error);
        console.log("Error while uploading resume!!");
        // process.exit(1);
   }
}

export {uploadResume}