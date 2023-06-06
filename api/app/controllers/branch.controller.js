const db = require("../models");
const Branch = db.branch;
//const Op = db.Sequelize.Op;
const sequelize = db.sequelize;

// Create and Save a new Branch
exports.create = (req, res) => {
   // Validate request
   if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a branch
  const branch = { 
    name: req.body.name,
    status: req.body.status,
    languageid: req.body.languageid,
    districtid: req.body.districtid,
    createdby:  'biruk',//req.body.createdby,
    createddate:  new Date(),// req.body.createddate,
    updatedby:  'biruk', //req.body.updatedby,
    updateddate: new Date(),//req.body.updateddate, 
  };

  // Save district in the database
  Branch.create(branch)
    .then(data => {
      console.log('saving data');
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Branch."
      });
    });
};

// Retrieve all branch from the database.
exports.findAll = (req, res) => {
    
    Branch.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving branch."
        });
      });
};

exports.getBranchsByDistrict = (req,res)=>{
  sequelize
  .query('CALL getBranchsByDistrict (:districtname)', 
  {replacements: { districtname: req.params.districtname, }})
  .then(data=>{
    console.log(data);
    if(data){
      res.send(data);
    }else{
      res.status(404).send({
        message: `Cannot find branch data`
      })
    }
  })
};

// Find a single branch with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Branch.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Branch with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Branch with id=" + id
        });
      });
};



// Update Branch by id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Branch.update(req.body, { where: { id: id }})
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Branch was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Branch with id=${id}. Maybe Branch was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Branch with id=" + id
        });
      });
};

// Delete a Branch with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Branch.destroy({where: { id: id }})
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Branch was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Branch with id=${id}. Maybe Branch was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Branch with id=" + id
        });
      });
};

//Delete all Branch from the database.
exports.deleteAll = (req, res) => {
    Branch.destroy({where: {}, truncate: false})
        .then(nums => {
          res.send({ message: `${nums} Branch were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Branch."
          });
        });
};

