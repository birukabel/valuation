module.exports = app => {
    const district = require("../controllers/district.controller.js");
  
    var router = require("express").Router();
  
    // Create a new district
    router.post("/", district.create);
  
    // Retrieve all district
    router.get("/", district.getAllDistrictsFromLookup);
  
    // Retrieve a single district with id
    router.get("/:id", district.findOne);

    // Update a district with id
    router.put("/:id", district.update);
  
    // Delete a district with id
    router.delete("/:id", district.delete);
  
    // Delete all district
    router.delete("/", district.deleteAll);
  
    app.use('/api/district', router);
  };