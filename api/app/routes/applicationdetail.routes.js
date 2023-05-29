module.exports = app => {
    const applicationdetail = require("../controllers/applicationdetail.controller.js");
  
    var router = require("express").Router();
  
    // Create a new applicationdetail
    router.post("/", applicationdetail.create);
  
    // Retrieve all applicationdetail
    router.get("/", applicationdetail.findAll);
  
    // Retrieve a single applicationdetail with id
    router.get("/:id", applicationdetail.findOne);

    //Reterive application detail via applicantname
    router.get("/byname/:applicantname",applicationdetail.getvaluationdetail_byapplicantname);
  
    // Update a applicationdetail with id
    router.put("/:id", applicationdetail.update);
  
    // Delete a applicationdetail with id
    router.delete("/:id", applicationdetail.delete);
  
    // Delete all applicationdetail
    router.delete("/", applicationdetail.deleteAll);
  
    app.use('/api/applicationdetail', router);
  };