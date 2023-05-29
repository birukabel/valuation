const db = require("../models");
const Attacheddocuments = db.attacheddocuments;
const Op = db.Sequelize.Op;

// Create and Save a new Attacheddocuments
exports.create = (req, res) => {
   // Validate request
   if (!req.body.filename) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Attacheddocuments
  const attacheddocuments = {
    filename: req.body.applicationid,
    fileurl: req.body.propertytypeid,
    applicationdetailid: req.body.valuationtypeid,
    status: req.body.quantity,
    orignalorcopy: req.body.addressofproperty,
    remark: req.body.requiredengineer,
    createdby:  req.body.createdby,
    createddate:   req.body.createddate,
    updatedby:  req.body.updatedby,
    updateddate: req.body.updateddate,
  };

  // Save Attacheddocuments in the database
  Attacheddocuments.create(attacheddocuments)
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

// Retrieve all Attacheddocuments from the database.
exports.findAll = (req, res) => {
    
    Attacheddocuments.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Attacheddocuments."
        });
      });
};

// Find a single Attacheddocuments with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Attacheddocuments.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Attacheddocuments with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Attacheddocuments with id=" + id
        });
      });
};

// Update a Attacheddocuments by id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Attacheddocuments.update(req.body, { where: { id: id }})
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Attacheddocuments was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Attacheddocuments with id=${id}. Maybe Attacheddocuments was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Attacheddocuments with id=" + id
        });
      });
};

// Delete a Attacheddocuments with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Attacheddocuments.destroy({where: { id: id }})
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Attacheddocuments was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Attacheddocuments with id=${id}. Maybe Attacheddocuments was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Attacheddocuments with id=" + id
        });
      });
};

// Delete all Attacheddocuments from the database.
exports.deleteAll = (req, res) => {
    Attacheddocuments.destroy({where: {}, truncate: false})
        .then(nums => {
          res.send({ message: `${nums} Attacheddocuments were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Attacheddocuments."
          });
        });
};

