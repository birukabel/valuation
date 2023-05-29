module.exports = (sequelize, Sequelize) => {
    const reportduringsiteinspection = sequelize.define("reportduringsiteinspection", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      applicationdetailid:{
        type: Sequelize.INTEGER
      },
      dateofinspection:{
        type: Sequelize.DATE
      },
      isappointmentpostponed:{
        type: Sequelize.TINYINT
      },
      postponedby:{
        type: Sequelize.INTEGER
      },
      completedocumentsrecived:{
        type: Sequelize.TINYINT
      },
      presenceofbranchmgrorcrm:{
        type: Sequelize.STRING
      },
      remark:{
        type: Sequelize.TEXT('long')
      },
      crmbranchmgrloanofficer:{
        type: Sequelize.STRING
      },
      additionaldocumentsneeded:{
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
    return reportduringsiteinspection;
  };  