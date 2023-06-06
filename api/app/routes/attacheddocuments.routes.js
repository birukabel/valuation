module.exports = app => {
    const attacheddocuments = require("../controllers/attacheddocuments.controller.js");
  
    var router = require("express").Router();
  
    // Create a new attacheddocuments
    router.post("/", attacheddocuments.create);
  
    // Retrieve all attacheddocuments
    router.get("/", attacheddocuments.findAll);
  
    // Retrieve a single attacheddocuments with id
    router.get("/:id", attacheddocuments.findOne);

    //retrive attached documents by applicationdetail id
    router.get("/byappdetail/:applicationdetailid",attacheddocuments.getDocumentsByApplicationDetailId);
  
    // Update a attacheddocuments with id
    router.put("/:id", attacheddocuments.update);
  
    // Delete a attacheddocuments with id
    router.delete("/:id", attacheddocuments.delete);
  
    // Delete all attacheddocuments
    router.delete("/", attacheddocuments.deleteAll);
  
    app.use('/api/attacheddocuments', router);
  };