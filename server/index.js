const express    = require('express');
const app        = express();
const mongoose   = require('mongoose')
const {dbURI}    = require('./config/keys');
const PORT       = 5000;

mongoose
    .connect(dbURI, { useNewUrlParser: true })
    .then(() => { console.log('Successfully connected to the database') })
    .catch(err => console.log(err))

app.use('/', require('./routes'))

//Server start
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`)
})