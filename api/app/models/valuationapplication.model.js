module.exports = (sequelize, Sequelize) => {
    const valuationapplication = sequelize.define("valuationapplication", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },    
      requestedby: {
        type: Sequelize.INTEGER
      },
      requestdate: {
        type: Sequelize.DATE
      },
      amountofcreditrequest: {
        type: Sequelize.DECIMAL
      },
      remark: {
        type: Sequelize.TEXT('long')
      },
      requestedbyname: {
        type: Sequelize.STRING
      },
      applicationstatus: {
        type: Sequelize.INTEGER
      },
      applicantname: {
        type: Sequelize.STRING
      }
    },
    {
      freezeTableName: true
    });  
    return valuationapplication;
  };

 
  

  