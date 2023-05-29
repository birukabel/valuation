module.exports = app => {
    const applicationstatus = require("../controllers/applicationstatus.controller.js");
  
    var router = require("express").Router();
  
    // Create a new applicationstatus
    router.post("/", applicationstatus.create);
  
    // Retrieve all applicationstatus
    router.get("/", applicationstatus.findAll);
  
    // Retrieve a single applicationstatus with id
    router.get("/:id", applicationstatus.findOne);
  
    // Update a applicationstatus with id
    router.put("/:id", applicationstatus.update);
  
    // Delete a applicationstatus with id
    router.delete("/:id", applicationstatus.delete);
  
    // Delete all applicationstatus
    router.delete("/", applicationstatus.deleteAll);
  
    app.use('/api/applicationstatus', router);
  };