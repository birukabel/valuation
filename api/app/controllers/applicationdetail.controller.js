const db = require("../models");
const Applicationdetail = db.applicationdetail;
//const Op = db.Sequelize.Op;
const sequelize = db.sequelize;

// Create and Save a new applicationdetail
exports.create = (req, res) => {
   // Validate request
   if (!req.body.propertyowner) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Applicationdetail
  const applicationdetail = {
    propertyowner: req.body.propertyowner,
    applicationid: req.body.applicationid,
    propertytypeid: req.body.propertytypeid,
    valuationtypeid: req.body.valuationtypeid,
    quantity: req.body.quantity,
    addressofproperty: req.body.addressofproperty,
    requiredengineer: req.body.requiredengineer,
    buildingstatus: req.body.buildingstatus,
    createdby:  'biruk',//req.body.createdby,
    createddate:  new Date(),// req.body.createddate,
    updatedby:  'biruk', //req.body.updatedby,
    updateddate: new Date(),//req.body.updateddate,
    remark: req.body.remark,    
  };

  // Save Applicationdetail in the database
  Applicationdetail.create(applicationdetail)
    .then(data => {
      console.log('saving data');
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the applicationdetail."
      });
    });
};

// Retrieve all Applicationdetail from the database.
exports.findAll = (req, res) => {
    
    Applicationdetail.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Applicationdetail."
        });
      });
};

exports.getvaluationdetail_byapplicantname = (req,res)=>{
  sequelize
  .query('CALL getvaluationdetail_byapplicantname (:applicantname)', 
        {replacements: { applicantname: req.params.applicantname, }})
  .then(data=>{
    console.log(data);
    if(data){
      res.send(data);
    }else{
      res.status(404).send({
        message: `Cannot find application detail by applicant name=${req.params.applicantname}.`
      })
    }
  })
};

// Find a single Applicationdetail with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Applicationdetail.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Applicationdetail with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Applicationdetail with id=" + id
        });
      });
};



// Update Applicationdetail by id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Applicationdetail.update(req.body, { where: { id: id }})
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Applicationdetail was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Applicationdetail with id=${id}. Maybe Applicationdetail was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Applicationdetail with id=" + id
        });
      });
};

// Delete a Applicationdetail with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Applicationdetail.destroy({where: { id: id }})
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Applicationdetail was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Applicationdetail with id=${id}. Maybe Applicationdetail was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Applicationdetail with id=" + id
        });
      });
};

// Delete all Applicationdetail from the database.
exports.deleteAll = (req, res) => {
    Applicationdetail.destroy({where: {}, truncate: false})
        .then(nums => {
          res.send({ message: `${nums} Applicationdetail were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Applicationdetail."
          });
        });
};

