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
    cb(null, filename + "_" + Date.now() + extension);
  },
});

const upload = multer({ storage: storage });
app.use(cors());
// Set up a route to handle file uploads
app.post("/upload/uploadFiles", upload.single("indigencyFile"), (req, res) => {
  // Access the uploaded file using req.file
  console.log(req.file);

  // Do further processing or save the file to your desired storage location

  // Send a JSON response indicating success
  res.json({ message: "File uploaded successfully!" });
});

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
