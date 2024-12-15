require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
// const { MongoClient } = require("mongodb");
const fileUpload = require("express-fileupload");
const connection = require("./config/database");
const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");
const configViewEngine = require("./config/viewEngine");
const port = process.env.PORT;

// config file upload
app.use(fileUpload());

app.use(express.json());
app.use(express.urlencoded({ encoded: true }));

configViewEngine(app);

app.use("/", webRoutes);
app.use("/v1/api/", apiRoutes);

(async () => {
  try {
    // Connection URL
    // const url = process.env.DB_HOST_WITH_DRIVER;
    // const client = new MongoClient(url);

    // const dbName = process.env.DB_NAME;
    //using mongoose
    await connection();

    // await client.connect();
    // const db = client.db(dbName);
    // const collection = db.collection("customers");

    // await collection.insertOne({"name":"thang"});
    // console.log("Connected successfully to server");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log("Error connect to DB:", error);
  }
})();
