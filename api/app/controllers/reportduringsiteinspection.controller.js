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
    applicationdetailid: req.body.applicationdetailid,
    dateofinspection: req.body.dateofinspection,
    isappointmentpostponed: req.body.isappointmentpostponed,
    postponedby: req.body.postponedby,
    completedocumentsrecived: req.body.completedocumentsrecived,
    presenceofbranchmgrorcrm: req.body.presenceofbranchmgrorcrm,
    remark: req.body.remark,
    crmbranchmgrloanofficer: req.body.crmbranchmgrloanofficer,
    additionaldocumentsneeded: req.body.additionaldocumentsneeded,
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
          err.message || "Some error occurred while creating the Reportduringsiteinspection."
      });
    });
};

// Retrieve all reportduringsiteinspection from the database.
exports.findAll = (req, res) => {
    
    Reportduringsiteinspection.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving reportduringsiteinspection."
        });
      });
};

// Find a single reportduringsiteinspection with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Reportduringsiteinspection.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find reportduringsiteinspection with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving reportduringsiteinspection with id=" + id
        });
      });
};

// Update a reportduringsiteinspection by id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Reportduringsiteinspection.update(req.body, { where: { id: id }})
      .then(num => {
        if (num == 1) {
          res.send({
            message: "reportduringsiteinspection was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update reportduringsiteinspection with id=${id}. Maybe reportduringsiteinspection was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating reportduringsiteinspection with id=" + id
        });
      });
};

// Delete a reportduringsiteinspection with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Reportduringsiteinspection.destroy({where: { id: id }})
      .then(num => {
        if (num == 1) {
          res.send({
            message: "reportduringsiteinspection was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete reportduringsiteinspection with id=${id}. Maybe reportduringsiteinspection was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete reportduringsiteinspection with id=" + id
        });
      });
};

// Delete all reportduringsiteinspection from the database.
exports.deleteAll = (req, res) => {
    Reportduringsiteinspection.destroy({where: {}, truncate: false})
        .then(nums => {
          res.send({ message: `${nums} reportduringsiteinspection were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all reportduringsiteinspection."
          });
        });
};

