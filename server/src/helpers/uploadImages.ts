import cloudinary from "cloudinary"
export const uploadImages = async(imgFiles : Express.Multer.File[]) =>{

    const uploadImagePromises = imgFiles.map(async (image) => {
        //just converting image file to base64 string
        const b64 = Buffer.from(image.buffer).toString("base64");
        let dataURI = `data:${image.mimetype};base64,${b64}`;
        const res = await cloudinary.v2.uploader.upload(dataURI);
        return res.url;
    });
    
    const imageURLs = await Promise.all(uploadImagePromises);
    return imageURLs;
}