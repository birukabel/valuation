module.exports = (sequelize, Sequelize) => {
    const district = sequelize.define("district", {
  
     id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name:{
        type: Sequelize.STRING
      },
      status:{
        type: Sequelize.BOOLEAN
      },
      languageid:{
        type: Sequelize.INTEGER
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
    return district;
  };  

