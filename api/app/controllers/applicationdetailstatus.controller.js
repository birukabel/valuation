const db = require("../models");
const Applicationstatus = db.applicationstatus;
const Op = db.Sequelize.Op;

// Create and Save a new Applicationstatus
exports.create = (req, res) => {
   // Validate request
   if (!req.body.applicationdetailid) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Applicationstatus
  const applicationstatus = {
    applicationid: req.body.applicationid,
    status: req.body.status,
    statuschangeby: req.body.statuschangeby,
    createddate:   req.body.createddate,
  };

  // Save Applicationstatus in the database
  Applicationstatus.create(applicationstatus)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Applicationstatus."
      });
    });
};

// Retrieve all Applicationstatus from the database.
exports.findAll = (req, res) => {
    
    Applicationstatus.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Applicationstatus."
        });
      });
};

// Find a single Applicationstatus with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Applicationstatus.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Applicationstatus with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Applicationstatus with id=" + id
        });
      });
};

// Update a Applicationstatus by id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Applicationstatus.update(req.body, { where: { id: id }})
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Applicationstatus was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Applicationstatus with id=${id}. Maybe Applicationstatus was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Applicationstatus with id=" + id
        });
      });
};

// Delete a Applicationstatus with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Applicationstatus.destroy({where: { id: id }})
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Applicationstatus was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Applicationstatus with id=${id}. Maybe Applicationstatus was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Applicationstatus with id=" + id
        });
      });
};

// Delete all Applicationstatus from the database.
exports.deleteAll = (req, res) => {
    Applicationstatus.destroy({where: {}, truncate: false})
        .then(nums => {
          res.send({ message: `${nums} Applicationstatus were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Applicationstatus."
          });
        });
};

