import cloudinary from "../utils/cloudinary.js";

export const uploadToCloudinary = async (fileBuffer, folder) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
        {
            resource_type: "auto",
            folder
        },
        (err, result) => {
            if (err) return reject(err);
            resolve(result.secure_url);
        }
        ).end(fileBuffer);
    });
};