const express = require("express");
const cors = require("cors");

const app = express();

global.__basedir = __dirname;

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));
//app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

//The below code creates models as database tables
/*db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });*/

// drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  //res.set('Access-Control-Allow-Origin', 'http://localhost:8082');
  res.json({ message: "Welcome to engineering valuation api." });
});

require("./app/routes/valuationapplication.routes")(app);
require("./app/routes/applicationdetail.routes")(app);
require("./app/routes/applicationdetailschedule.routes")(app);
require("./app/routes/applicationdetailstatus.routes")(app);
require("./app/routes/applicationstatus.routes")(app);
require("./app/routes/attacheddocuments.routes")(app);
require("./app/routes/checkerapprover.routes")(app);
require("./app/routes/documentsrecivedduringinspection.routes")(app);
require("./app/routes/reportaftersiteinspection.routes")(app);
require("./app/routes/reportduringsiteinspection.routes")(app);
require("./app/routes/valuationapplication.routes")(app);
require("./app/routes/file.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});