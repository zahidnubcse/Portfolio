// upload.js
const multer = require("multer");
const { Readable } = require("stream");
const cloudinary = require("../config/cloudinary"); // <- import the configured instance

const storage = multer.memoryStorage();
const upload = multer({ storage });

const uploadToCloudinary = (fileBuffer, folder = "projects") => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );

    const readable = new Readable();
    readable._read = () => {};
    readable.push(fileBuffer);
    readable.push(null);
    readable.pipe(stream);
  });
};

module.exports = { upload, uploadToCloudinary };