const db = require("../models");
const Reportduringsiteinspection = db.reportduringsiteinspection;
const Op = db.Sequelize.Op;

// Create and Save a new reportduringsiteinspection
exports.create = (req, res) => {
   // Validate request
   if (!req.body.filename) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a reportduringsiteinspection
  const reportduringsiteinspection = {
    completedocumentsreciveddate: req.body.completedocumentsreciveddate,
    dateofvaluation: req.body.dateofvaluation,
    applicationid: req.body.applicationid,
    filename: req.body.filename,
    fileurl: req.body.fileurl,
    remark: req.body.remark,
    createdby:  req.body.createdby,
    createddate:   req.body.createddate,
    updatedby:  req.body.updatedby,
    updateddate: req.body.updateddate,
  };

  // Save reportduringsiteinspection in the database
  Reportduringsiteinspection.create(reportduringsiteinspection)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the reportduringsiteinspection."
      });
    });
};

// Retrieve all Reportduringsiteinspection from the database.
exports.findAll = (req, res) => {
    
    Reportduringsiteinspection.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Reportduringsiteinspection."
        });
      });
};

// Find a single Reportduringsiteinspection with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Reportduringsiteinspection.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Reportduringsiteinspection with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Reportduringsiteinspection with id=" + id
        });
      });
};

// Update a Reportduringsiteinspection by id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Reportduringsiteinspection.update(req.body, { where: { id: id }})
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Reportduringsiteinspection was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Reportduringsiteinspection with id=${id}. Maybe Reportduringsiteinspection was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Reportduringsiteinspection with id=" + id
        });
      });
};

// Delete a Reportduringsiteinspection with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Reportduringsiteinspection.destroy({where: { id: id }})
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Reportduringsiteinspection was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Reportduringsiteinspection with id=${id}. Maybe Reportduringsiteinspection was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Reportduringsiteinspection with id=" + id
        });
      });
};

// Delete all Reportduringsiteinspection from the database.
exports.deleteAll = (req, res) => {
    Reportduringsiteinspection.destroy({where: {}, truncate: false})
        .then(nums => {
          res.send({ message: `${nums} Reportduringsiteinspection were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Reportduringsiteinspection."
          });
        });
};

