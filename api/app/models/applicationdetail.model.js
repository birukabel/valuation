module.exports = (sequelize, Sequelize) => {
    const applicationdetail = sequelize.define("applicationdetail", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      applicationid:{
        type: Sequelize.INTEGER
      },
      propertytypeid:{
        type: Sequelize.STRING
      },
      valuationtypeid:{
        type: Sequelize.STRING
      },
      quantity:{
        type: Sequelize.INTEGER
      },
      addressofproperty: {
        type: Sequelize.STRING
      },
      requiredengineer: {
        type: Sequelize.STRING
      },
      buildingstatus:{
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
      },
      propertyowner: {
        type: Sequelize.STRING
      },
      remark: {
        type: Sequelize.STRING
      }
    },
    {
      freezeTableName: true
    });  
    return applicationdetail;
  };  

