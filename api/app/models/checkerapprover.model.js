module.exports = (sequelize, Sequelize) => {
    const checkerapprover = sequelize.define("checkerapprover", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      applicationid:{
        type: Sequelize.INTEGER
      },
      aftersiteinspectionid:{
        type: Sequelize.INTEGER
      },
      chekerdate:{
        type: Sequelize.DATE
      },
      checker:{
        type: Sequelize.STRING
      },
      checkercomment: {
        type: Sequelize.TEXT('long')
      },
      approvedate: {
        type: Sequelize.DATE
      },
      approver:{
        type: Sequelize.STRING
      },
      approvercomment:{
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
    return checkerapprover;
  };  