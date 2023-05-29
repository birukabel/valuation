module.exports = app => {
    const documentsrecivedduringinspection = require("../controllers/documentsrecivedduringinspection.controller.js");
  
    var router = require("express").Router();
  
    // Create a new documentsrecivedduringinspection
    router.post("/", documentsrecivedduringinspection.create);
  
    // Retrieve all documentsrecivedduringinspection
    router.get("/", documentsrecivedduringinspection.findAll);
  
    // Retrieve a single documentsrecivedduringinspection with id
    router.get("/:id", documentsrecivedduringinspection.findOne);
  
    // Update a documentsrecivedduringinspection with id
    router.put("/:id", documentsrecivedduringinspection.update);
  
    // Delete a documentsrecivedduringinspection with id
    router.delete("/:id", documentsrecivedduringinspection.delete);
  
    // Delete all documentsrecivedduringinspection
    router.delete("/", documentsrecivedduringinspection.deleteAll);
  
    app.use('/api/documentsrecivedduringinspection', router);
  };