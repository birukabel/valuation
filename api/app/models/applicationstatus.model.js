module.exports = (sequelize, Sequelize) => {
    const applicationstatus = sequelize.define("applicationstatus", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      applicationid:{
        type: Sequelize.INTEGER
      },
      status:{
        type: Sequelize.TINYINT
      },
      statuschangeby:{
        type: Sequelize.STRING
      },      
      createddate:{
        type: Sequelize.DATE
      }
    },
    {
      freezeTableName: true
    });  
    return applicationstatus;
  };  