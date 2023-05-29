module.exports = app => {
  const fileupload = require("../controllers/file.controller.js");

  var router = require("express").Router();

  // Upload a new file
  router.post("/", fileupload.test);

  //const express = require('express');
  const multer = require('multer');
  const maxSize = 1 * 1024 * 1024;

// set up multer middleware
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploadeddocuments/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
//create multer instance
var upload = multer({ 
  storage: storage, 
  limits: { fileSize: maxSize },
})


  router.post('/uploadfile2',upload.single('filetoupload'),function(req,res,next){
    console.log(req.file.filename);  
    res.status(200).send({'message' : "file uploaded"});
})

router.post('/uploadfile3',fileupload.testUpload);

router.get('/',fileupload.getListFiles);

  app.use('/api/fileupload', router);
};