module.exports = (sequelize, Sequelize) => {
    const branch = sequelize.define("branch", {
  
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
      districtid:{
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
    return branch;
  };  

