module.exports = (sequelize, Sequelize) => {
    const applicationdetailstatus = sequelize.define("applicationdetailstatus", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      applicationdetailid:{
        type: Sequelize.INTEGER
      },
      status:{
        type: Sequelize.TINYINT
      },
      createdby: {
        type: Sequelize.STRING
      },
      createddate:{
        type: Sequelize.DATE
      },
      updatedby:{
        type: Sequelize.STRING
      },
      updateddate:{
        type: Sequelize.DATE
      }
    },
    {
      freezeTableName: true
    });  
    return applicationdetailstatus;
  };  