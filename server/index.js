const express = require('express');

const db = require('../db/connection.js');

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`)
})