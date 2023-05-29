const db = require("../models");
const Checkerapprover = db.checkerapprover;
const Op = db.Sequelize.Op;

// Create and Save a new checkerapprover
exports.create = (req, res) => {
   // Validate request
   if (!req.body.filename) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a checkerapprover
  const checkerapprover = {
    applicationid: req.body.applicationid,
    aftersiteinspectionid: req.body.aftersiteinspectionid,
    chekerdate: req.body.chekerdate,
    checker: req.body.checker,
    checkercomment: req.body.checkercomment,
    approvedate: req.body.approvedate,
    approver: req.body.approver,
    approvercomment: req.body.approvercomment,
    createdby:  req.body.createdby,
    createddate:   req.body.createddate,
    updatedby:  req.body.updatedby,
    updateddate: req.body.updateddate,
  };

  // Save checkerapprover in the database
  Checkerapprover.create(checkerapprover)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the attacheddocuments."
      });
    });
};

// Retrieve all checkerapprover from the database.
exports.findAll = (req, res) => {
    
    Checkerapprover.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving checkerapprover."
        });
      });
};

// Find a single checkerapprover with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Checkerapprover.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find checkerapprover with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving checkerapprover with id=" + id
        });
      });
};

// Update a checkerapprover by id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Checkerapprover.update(req.body, { where: { id: id }})
      .then(num => {
        if (num == 1) {
          res.send({
            message: "checkerapprover was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update checkerapprover with id=${id}. Maybe checkerapprover was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating checkerapprover with id=" + id
        });
      });
};

// Delete a checkerapprover with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Checkerapprover.destroy({where: { id: id }})
      .then(num => {
        if (num == 1) {
          res.send({
            message: "checkerapprover was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete checkerapprover with id=${id}. Maybe checkerapprover was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete checkerapprover with id=" + id
        });
      });
};

// Delete all checkerapprover from the database.
exports.deleteAll = (req, res) => {
    Checkerapprover.destroy({where: {}, truncate: false})
        .then(nums => {
          res.send({ message: `${nums} checkerapprover were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all checkerapprover."
          });
        });
};

