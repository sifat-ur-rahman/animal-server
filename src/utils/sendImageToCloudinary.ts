import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import config from '../app/config';

cloudinary.config({
  cloud_name: config.cloudinary_cloud_name,
  api_key: config.cloudinary_api_key,
  api_secret: config.cloudinary_api_secret,
});

export const sendImageToCloudinary = (
  imageName: string,
  fileBuffer: Buffer,
) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { public_id: imageName.trim() },
      (error, result) => {
        if (error) {
          return reject(error);
        }
        if (!result || !result.secure_url) {
          return reject(new Error('Upload failed, no result returned.'));
        }
        resolve(result);
      },
    );

    uploadStream.end(fileBuffer);
  });
};

// Use memory storage since Vercel doesn't support persistent file storage
const storage = multer.memoryStorage();
export const upload = multer({ storage: storage });
