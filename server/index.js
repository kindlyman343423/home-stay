const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { dbURI } = require("./config/keys");
const PORT = 3001;
const FakeDb = require("./models/fakeDb");
const cors = require('cors');

app.use(cors());

app.use(express.json());

mongoose
  .set("useCreateIndex", true)
  .connect(dbURI, { useNewUrlParser: true })
  .then(() => {
    console.log("connected...");
    const fakeDb = new FakeDb();
    // fakeDb.seedDb();
  })
  .catch(err => console.log(err));

app.use("/api/rentals", require("./routes/rentalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));

//Server start
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
