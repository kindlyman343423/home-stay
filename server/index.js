const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { dbURI } = require("./config/keys");
const PORT = 3001;
const FakeDb = require("./models/fakeDb");

mongoose
  .connect(dbURI, { useNewUrlParser: true })
  .then(() => {
    console.log("Successfully connected to the database");
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
  })
  .catch(err => console.log(err));

app.use("/api/rentals", require("./routes"));

//Server start
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
