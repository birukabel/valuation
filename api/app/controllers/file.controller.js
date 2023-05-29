//Imports
//const express = require('express');
const multer = require('multer');
const fs = require("fs");
const baseUrl = "http://localhost:8082/files";

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
var upload = multer({ storage: storage })

// create app 
/*port = 3000;
const app = express();
app.listen(port,()=>{
    console.log("Server started on port :"+port)
});*/


// to use this API the user need to upload a single file using field name "filetoupload" when sending the POST request 
//and must send a JSON with "description" filed

/*app.post('/uploadfile', upload.single('filetoupload'), function (req, res, next) {  
    console.log(req.body.description);  
    res.status(200).send({'message' : "file uploaded"});
  })*/



// Create and Save a new valuation application
/*
const create = (req, res,next) => {
  console.log('file upload entry point');
  //console.log(req.body.description)
  upload.single('filetoupload')  
  console.log(res);
  res.status(200).send({'message': "file uploaded"})  
};*/


/*
const test = (function(req,res,next){
    upload.single('filetoupload')
    console.log(req.body);
    console.log(req.body.description);  
    res.status(200).send({'message' : "file uploaded"});
})*/

exports.test = (upload.single('filetoupload'),function(req,res,next){
  console.log(req.body.filetoupload);  
  res.status(200).send({'message' : "file uploaded"});
})

exports.testUpload = (upload.single('filetoupload'),(req,res,next)=>{
  console.log(req.file.filename);  
  res.status(200).send({'message' : "file uploaded"});
})

exports.getListFiles = (req, res) => {
  const directoryPath = __basedir + "\\uploadeddocuments\\";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: baseUrl + file,
      });
    });

    res.status(200).send(fileInfos);
  });
};




