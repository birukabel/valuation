const db = require("../models");
const Valuationapplication = db.valuationapplication;
const Op = db.Sequelize.Op;

// Create and Save a new valuation application
exports.create = (req, res) => {
   // Validate request
   if (!req.body.amountofcreditrequest) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Valuationapplication
  const valuationapplication = {
    requestedby: req.body.requestedby,
    requestdate: req.body.requestdate,
    amountofcreditrequest: req.body.amountofcreditrequest,
    remark: req.body.remark,
    requestedbyname: req.body.requestedbyname,
    applicationstatus: req.body.applicationstatus,
    applicantname:req.body.applicantname,
  };

  // Save Valuationapplication in the database
  Valuationapplication.create(valuationapplication)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the valuation application."
      });
    });
};

// Retrieve all valuation applications from the database.
exports.findAll = (req, res) => {
    
    Valuationapplication.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving valuation applications."
        });
      });
};

// Find a single valutaion application with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Valuationapplication.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find valuationapplication with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving valuationapplication with id=" + id
        });
      });
};

// Update a valuation application by id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Valuationapplication.update(req.body, { where: { id: id }})
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Valuationapplication was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Valuationapplication with id=${id}. Maybe Valuationapplication was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
};

// Delete a Valuation application with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Valuationapplication.destroy({where: { id: id }})
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Valuationapplication was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Valuationapplication with id=${id}. Maybe Valuationapplication was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Valuationapplication with id=" + id
        });
      });
};

// Delete all valuation applications from the database.
exports.deleteAll = (req, res) => {
    Valuationapplication.destroy({where: {}, truncate: false})
        .then(nums => {
          res.send({ message: `${nums} Valuationapplications were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Valuationapplication."
          });
        });
};

