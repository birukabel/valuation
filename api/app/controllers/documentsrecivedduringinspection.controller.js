const db = require("../models");
const Documentsrecivedduringinspection = db.documentsrecivedduringinspection;
const Op = db.Sequelize.Op;

// Create and Save a new documentsrecivedduringinspection
exports.create = (req, res) => {
   // Validate request
   if (!req.body.filename) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a documentsrecivedduringinspection
  const documentsrecivedduringinspection = {
    siteinspectionid: req.body.siteinspectionid,
    filename: req.body.filename,
    fileurl: req.body.fileurl,
    status: req.body.quantity,
    createdby:  req.body.createdby,
    createddate:   req.body.createddate,
    updatedby:  req.body.updatedby,
    updateddate: req.body.updateddate,
  };

  // Save Documentsrecivedduringinspection in the database
  Documentsrecivedduringinspection.create(documentsrecivedduringinspection)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the documentsrecivedduringinspection."
      });
    });
};

// Retrieve all documentsrecivedduringinspection from the database.
exports.findAll = (req, res) => {
    
    Documentsrecivedduringinspection.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving documentsrecivedduringinspection."
        });
      });
};

// Find a single documentsrecivedduringinspection with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Documentsrecivedduringinspection.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find documentsrecivedduringinspection with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving documentsrecivedduringinspection with id=" + id
        });
      });
};

// Update a documentsrecivedduringinspection by id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Documentsrecivedduringinspection.update(req.body, { where: { id: id }})
      .then(num => {
        if (num == 1) {
          res.send({
            message: "documentsrecivedduringinspection was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update documentsrecivedduringinspection with id=${id}. Maybe documentsrecivedduringinspection was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating documentsrecivedduringinspection with id=" + id
        });
      });
};

// Delete a documentsrecivedduringinspection with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Documentsrecivedduringinspection.destroy({where: { id: id }})
      .then(num => {
        if (num == 1) {
          res.send({
            message: "documentsrecivedduringinspection was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete documentsrecivedduringinspection with id=${id}. Maybe documentsrecivedduringinspection was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete documentsrecivedduringinspection with id=" + id
        });
      });
};

// Delete all documentsrecivedduringinspection from the database.
exports.deleteAll = (req, res) => {
    Documentsrecivedduringinspection.destroy({where: {}, truncate: false})
        .then(nums => {
          res.send({ message: `${nums} documentsrecivedduringinspection were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all documentsrecivedduringinspection."
          });
        });
};

