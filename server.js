const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const request = require('request');
const knex = require('./db/knex');

const booklist = require('./routes/booklist_routes');
app.use('/', booklist);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
