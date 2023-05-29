module.exports = app => {
    const reportduringsiteinspection = require("../controllers/reportduringsiteinspection.controller.js");
  
    var router = require("express").Router();
  
    // Create a new reportduringsiteinspection
    router.post("/", reportduringsiteinspection.create);
  
    // Retrieve all reportduringsiteinspection
    router.get("/", reportduringsiteinspection.findAll);
  
    // Retrieve a single reportduringsiteinspection with id
    router.get("/:id", reportduringsiteinspection.findOne);
  
    // Update a reportduringsiteinspection with id
    router.put("/:id", reportduringsiteinspection.update);
  
    // Delete a reportduringsiteinspection with id
    router.delete("/:id", reportduringsiteinspection.delete);
  
    // Delete all reportduringsiteinspection
    router.delete("/", reportduringsiteinspection.deleteAll);
  
    app.use('/api/reportduringsiteinspection', router);
  };