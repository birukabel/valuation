module.exports = app => {
    const reportaftersiteinspection = require("../controllers/reportaftersiteinspection.controller.js");
  
    var router = require("express").Router();
  
    // Create a new reportaftersiteinspection
    router.post("/", reportaftersiteinspection.create);
  
    // Retrieve all reportaftersiteinspection
    router.get("/", reportaftersiteinspection.findAll);
  
    // Retrieve a single reportaftersiteinspection with id
    router.get("/:id", reportaftersiteinspection.findOne);
  
    // Update a reportaftersiteinspection with id
    router.put("/:id", reportaftersiteinspection.update);
  
    // Delete a reportaftersiteinspection with id
    router.delete("/:id", reportaftersiteinspection.delete);
  
    // Delete all reportaftersiteinspection
    router.delete("/", reportaftersiteinspection.deleteAll);
  
    app.use('/api/reportaftersiteinspection', router);
  };