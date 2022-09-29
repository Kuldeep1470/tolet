const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
require("dotenv").config({ path: "./.env" });
const PORT = process.env.PORT || 5001;
const path = require("path")
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
) 
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");


__dirname = path.resolve();

// ---------------diployment-----------------

// if(process.env.NODE_ENV == "production"){
  
  app.use(express.static(path.join(__dirname, "./client/build")));
  
  app.get('*' , ((req, res) =>{
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  }))
// }
// ---------------diployment-----------------


app.listen(PORT, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on PORT: ${PORT}`);
});
