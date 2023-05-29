module.exports = (sequelize, Sequelize) => {
    const applicationdetailschedule = sequelize.define("applicationdetailschedule", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      applicationdetailid:{
        type: Sequelize.INTEGER
      },
      date:{
        type: Sequelize.DATE
      },
      assignedengineer:{
        type: Sequelize.INTEGER
      },
      branch:{
        type: Sequelize.INTEGER
      },
      siteortown: {
        type: Sequelize.STRING
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
    }
    );  
    return applicationdetailschedule;
  };  