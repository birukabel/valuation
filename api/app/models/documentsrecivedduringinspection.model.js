module.exports = (sequelize, Sequelize) => {
    const documentsrecivedduringinspection = sequelize.define("documentsrecivedduringinspection", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      siteinspectionid:{
        type: Sequelize.INTEGER
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
    return documentsrecivedduringinspection;
  };  
