const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');


// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

const multer = require("multer");

// This will help us connect to the database
const dbo = require("../db/conn");
const { hostname } = require("os");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


const storage = multer.diskStorage({
  destination: (req, file, callback)=>{
    callback(null,"../client/public/uploade")
  },
  filename: (req, file, callback)=>{
    callback(null, file.originalname);
  }
})

const upload = multer({storage: storage});


// This section will help you get a list of all the records.
recordRoutes.route("/properties").get(function (req, res) {
  let db_connect = dbo.getDb("toletplus");
  db_connect
    .collection("properties")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
recordRoutes.route("/property/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("properties")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new record.
recordRoutes.post("/property/add", upload.array("photos") , (req , res)=> {
  // const form = req.body;


  // console.log(form);
  let db_connect = dbo.getDb("toletplus");
  // const url = req.protocol +'://' + req.get('host');

  let filesArray = [];
        req.files.forEach(element => {
            const file = {
                fileName: element.originalname,
                filePath: element.path,
                fileType: element.mimetype,
                fileSize: element.size
            }
            filesArray.push(file);
        });

  let myobj = {
    availableFor: req.body.availableFor,
    floor: req.body.floor,
    ownership_type: req.body.ownership_type,
    property_type: req.body.property_type,
    ageOfProperty: req.body.ageOfProperty,
    property_area: req.body.property_area,
    furnished: req.body.furnished,
    city: req.body.city,
    landmark: req.body.landmark,
    address: req.body.address,
    expected_rent: req.body.expected_rent,
    monthly_maintenance: req.body.monthly_maintenance,
    rent_negotiable: req.body.rent_negotiable,
    deposit: req.body.deposit,
    lease_duration: req.body.lease_duration,
    lockin_period: req.body.lockin_period,
    security: req.body.security,
    washroom: req.body.washroom,
    parking: req.body.parking,
    discription: req.body.discription,
    date: req.body.date,
    photos: filesArray,
  };
  // console.log(myobj);

  db_connect.collection("properties").insertOne(myobj, function (err, res) {
    if (err) throw err;
  });
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    },
  };
  db_connect
    .collection("properties")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("properties").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;
