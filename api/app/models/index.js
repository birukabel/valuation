const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  define: {
    timestamps: false
  },
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.valuationapplication = require("./valuationapplication.model.js")(sequelize, Sequelize);
db.applicationdetail = require("./applicationdetail.model.js")(sequelize, Sequelize);
db.applicationstatus = require("./applicationstatus.model.js")(sequelize, Sequelize);
db.attacheddocuments = require("./attacheddocuments.model.js")(sequelize, Sequelize);
db.applicationdetailschedule = require("./applicationdetailschedule.model.js")(sequelize, Sequelize);
db.applicationdetailstatus = require("./applicationdetailstatus.model.js")(sequelize, Sequelize);
db.checkerapprover = require("./checkerapprover.model.js")(sequelize, Sequelize);
db.documentsrecivedduringinspection = require("./documentsrecivedduringinspection.model.js")(sequelize, Sequelize);
db.reportaftersiteinspection = require("./reportaftersiteinspection.model.js")(sequelize, Sequelize);
db.reportduringsiteinspection = require("./reportduringsiteinspection.model.js")(sequelize, Sequelize);
db.district = require("./district.model.js")(sequelize, Sequelize);
db.branch = require("./branch.model.js")(sequelize, Sequelize);


module.exports = db;