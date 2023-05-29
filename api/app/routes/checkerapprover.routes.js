module.exports = app => {
    const checkerapprover = require("../controllers/checkerapprover.controller.js");
  
    var router = require("express").Router();
  
    // Create a new checkerapprover
    router.post("/", checkerapprover.create);
  
    // Retrieve all checkerapprover
    router.get("/", checkerapprover.findAll);
  
    // Retrieve a single checkerapprover with id
    router.get("/:id", checkerapprover.findOne);
  
    // Update a checkerapprover with id
    router.put("/:id", checkerapprover.update);
  
    // Delete a checkerapprover with id
    router.delete("/:id", checkerapprover.delete);
  
    // Delete all checkerapprover
    router.delete("/", checkerapprover.deleteAll);
  
    app.use('/api/checkerapprover', router);
  };