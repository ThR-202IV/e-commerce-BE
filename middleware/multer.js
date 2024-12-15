import multer from "multer";

/* storage name is required to be "storage" by multer */
const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });

export default upload;
