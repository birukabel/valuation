const db = require("../models");
const District = db.district;
//const Op = db.Sequelize.Op;
const sequelize = db.sequelize;

// Create and Save a new district
exports.create = (req, res) => {
   // Validate request
   if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a district
  const district = { 
    name: req.body.name,
    status: req.body.status,
    languageid: req.body.languageid,
    createdby:  'biruk',//req.body.createdby,
    createddate:  new Date(),// req.body.createddate,
    updatedby:  'biruk', //req.body.updatedby,
    updateddate: new Date(),//req.body.updateddate, 
  };

  // Save district in the database
  District.create(district)
    .then(data => {
      console.log('saving data');
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the district."
      });
    });
};

// Retrieve all district from the database.
exports.findAll = (req, res) => {
    
    District.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving district."
        });
      });
};

exports.getAllDistrictsFromLookup = (req,res)=>{
  sequelize
  .query('CALL getAllDistrictsFromLookup ()')
  .then(data=>{
    console.log(data);
    if(data){
      res.send(data);
    }else{
      res.status(404).send({
        message: `Cannot find district data`
      })
    }
  })
};

// Find a single district with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    District.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find District with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving District with id=" + id
        });
      });
};



// Update District by id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    District.update(req.body, { where: { id: id }})
      .then(num => {
        if (num == 1) {
          res.send({
            message: "District was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update District with id=${id}. Maybe District was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating District with id=" + id
        });
      });
};

// Delete a District with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    District.destroy({where: { id: id }})
      .then(num => {
        if (num == 1) {
          res.send({
            message: "District was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete District with id=${id}. Maybe District was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete District with id=" + id
        });
      });
};

// Delete all District from the database.
exports.deleteAll = (req, res) => {
    District.destroy({where: {}, truncate: false})
        .then(nums => {
          res.send({ message: `${nums} District were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all District."
          });
        });
};

