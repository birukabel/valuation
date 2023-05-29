module.exports = (sequelize, Sequelize) => {
    const attacheddocuments = sequelize.define("attacheddocuments", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      filename:{
        type: Sequelize.STRING
      },
      fileurl:{
        type: Sequelize.STRING
      },
      applicationdetailid:{
        type: Sequelize.INTEGER
      },
      status:{
        type: Sequelize.TINYINT
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      orignalorcopy: {
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
    return attacheddocuments;
  };  
