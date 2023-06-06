module.exports = app => {
    const branch = require("../controllers/branch.controller.js");
  
    var router = require("express").Router();
  
    // Create a new branch
    router.post("/", branch.create);
  
    // Retrieve all branch
    router.get("/", branch.findAll);
  
    // Retrieve a single branch with id
    router.get("/:id", branch.findOne);

    //Reterive branch via districtname
    router.get("/bydistrict/:districtname",branch.getBranchsByDistrict);

    // Update a branch with id
    router.put("/:id", branch.update);
  
    // Delete a branch with id
    router.delete("/:id", branch.delete);
  
    // Delete all branch
    router.delete("/", branch.deleteAll);
  
    app.use('/api/branch', router);
  };