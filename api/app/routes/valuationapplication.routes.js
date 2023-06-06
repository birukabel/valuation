module.exports = app => {
    const valuationapplication = require("../controllers/valuationapplication.controller.js");
  
    var router = require("express").Router();
  
    // Create a new valuationapplication
    router.post("/", valuationapplication.create);
  
    // Retrieve all valuationapplication
    router.get("/", valuationapplication.findAll);

    //Retirve valuation application by branch name
    router.get("/bybranchname/:branchName",valuationapplication.getValuationApplicationByBranch);
  
    // Retrieve a single valuationapplication with id
    router.get("/:id", valuationapplication.findOne);
  
    // Update a valuationapplication with id
    router.put("/:id", valuationapplication.update);
  
    // Delete a valuationapplication with id
    router.delete("/:id", valuationapplication.delete);
  
    // Delete all valuationapplication
    router.delete("/", valuationapplication.deleteAll);
  
    app.use('/api/valuationapplication', router);
  };