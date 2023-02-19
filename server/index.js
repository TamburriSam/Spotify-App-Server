const express = require("express");
const mongoose = require('mongoose');
const routes = require('./routes/routes');
require('dotenv').config();

// support parsing of application/json type post data
const app = express();
app.use(express.json())

const PORT = process.env.PORT || 3006;

//DB Connection
const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString);
const database = mongoose.connection

app.use('/api', routes)




/* app.get("/api", (req, res) => {
    res.json({message: "Hello from server"});
}) */

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})

