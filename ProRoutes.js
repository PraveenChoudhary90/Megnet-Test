const express = require("express");
const route = express.Router();
const multer = require('multer');
const path = require('path');
const ProController = require("../Controller/Procontroller");




// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Set the upload directory
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // Set the file name
    }
  });
  
  // Create the multer instance
  const upload = multer({ storage: storage });
  




route.post("/InsertProduct",upload.array("image",10), ProController.InsertProduct)
route.get("/ProductDistplay", ProController.ProductDisplay);







module.exports = route;