module.exports = app => {
    const applicationdetailstatus = require("../controllers/applicationdetailstatus.controller.js");
  
    var router = require("express").Router();
  
    // Create a new applicationdetailstatus
    router.post("/", applicationdetailstatus.create);
  
    // Retrieve all applicationdetailstatus
    router.get("/", applicationdetailstatus.findAll);
  
    // Retrieve a single applicationdetailstatus with id
    router.get("/:id", applicationdetailstatus.findOne);
  
    // Update a applicationdetailstatus with id
    router.put("/:id", applicationdetailstatus.update);
  
    // Delete a applicationdetailstatus with id
    router.delete("/:id", applicationdetailstatus.delete);
  
    // Delete all applicationdetailstatus
    router.delete("/", applicationdetailstatus.deleteAll);
  
    app.use('/api/applicationdetailstatus', router);
  };