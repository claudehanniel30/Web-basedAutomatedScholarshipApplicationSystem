const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    const originalname = file.originalname;
    const extension = path.extname(originalname);
    const filename = path.basename(originalname, extension);
    cb(null, filename + extension);
  },
});

const upload = multer({ storage: storage });
app.use(cors());
// Set up a route to handle file uploads
app.post(
  "/upload/uploadFiles",
  upload.fields([
    { name: "indigencyFile", maxCount: 1 },
    { name: "gradeFile", maxCount: 1 },
    { name: "idFile", maxCount: 1 },
    { name: "corFile", maxCount: 1 },
  ]),
  (req, res) => {
    // Access the uploaded files using req.files
    const indigencyFile = req.files["indigencyFile"][0];
    const gradeFile = req.files["gradeFile"][0];
    const idFile = req.files["idFile"][0];
    const corFile = req.files["corFile"][0];

    // Do further processing or save the files to your desired storage location

    // Send a JSON response indicating success
    res.json({ message: "Files uploaded successfully!" });
  }
);

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
