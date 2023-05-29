module.exports = (sequelize, Sequelize) => {
    const reportaftersiteinspection = sequelize.define("reportaftersiteinspection", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      completedocumentsreciveddate:{
        type: Sequelize.DATE
      },
      dateofvaluation:{
        type: Sequelize.DATE
      },
      applicationid:{
        type: Sequelize.INTEGER
      },
      filename:{
        type: Sequelize.STRING
      },
      fileurl:{
        type: Sequelize.STRING
      },
      remark:{
        type: Sequelize.TEXT('long')
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
    return reportaftersiteinspection;
  };   
 