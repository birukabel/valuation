const db = require("../models");
const Applicationdetailschedule = db.applicationdetailschedule;
const Op = db.Sequelize.Op;

// Create and Save a new applicationdetailschedule
exports.create = (req, res) => {
   // Validate request
   if (!req.body.applicationdetailid) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Applicationdetailschedule
  const applicationdetailschedule = {
    applicationdetailid: req.body.applicationdetailid,
    date: req.body.date,
    assignedengineer: req.body.assignedengineer,
    branch: req.body.branch,
    siteortown: req.body.siteortown,
    createdby:  req.body.createdby,
    createddate:   req.body.createddate,
    updatedby:  req.body.updatedby,
    updateddate: req.body.updateddate,
  };

  // Save applicationdetailschedule in the database
  Applicationdetailschedule.create(applicationdetailschedule)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the applicationdetailschedule."
      });
    });
};

// Retrieve all applicationdetailschedule from the database.
exports.findAll = (req, res) => {
    
    Applicationdetailschedule.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving applicationdetailschedule."
        });
      });
};

// Find a single applicationdetailschedule with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Applicationdetailschedule.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find applicationdetailschedule with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving applicationdetailschedule with id=" + id
        });
      });
};

// Update a applicationdetailschedule by id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Applicationdetailschedule.update(req.body, { where: { id: id }})
      .then(num => {
        if (num == 1) {
          res.send({
            message: "applicationdetailschedule was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update applicationdetailschedule with id=${id}. Maybe applicationdetailschedule was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating applicationdetailschedule with id=" + id
        });
      });
};

// Delete a applicationdetailschedule with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Applicationdetailschedule.destroy({where: { id: id }})
      .then(num => {
        if (num == 1) {
          res.send({
            message: "applicationdetailschedule was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete applicationdetailschedule with id=${id}. Maybe applicationdetailschedule was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete applicationdetailschedule with id=" + id
        });
      });
};

// Delete all applicationdetailschedule from the database.
exports.deleteAll = (req, res) => {
    Applicationdetailschedule.destroy({where: {}, truncate: false})
        .then(nums => {
          res.send({ message: `${nums} applicationdetailschedule were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all applicationdetailschedule."
          });
        });
};

