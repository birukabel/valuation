module.exports = app => {
    const applicationdetailschedule = require("../controllers/applicationdetailschedule.controller.js");
  
    var router = require("express").Router();
  
    // Create a new applicationdetailschedule
    router.post("/", applicationdetailschedule.create);
  
    // Retrieve all applicationdetailschedule
    router.get("/", applicationdetailschedule.findAll);
  
    // Retrieve a single applicationdetailschedule with id
    router.get("/:id", applicationdetailschedule.findOne);
  
    // Update a applicationdetailschedule with id
    router.put("/:id", applicationdetailschedule.update);
  
    // Delete a applicationdetailschedule with id
    router.delete("/:id", applicationdetailschedule.delete);
  
    // Delete all applicationdetailschedule
    router.delete("/", applicationdetailschedule.deleteAll);
  
    app.use('/api/applicationdetailschedule', router);
  };