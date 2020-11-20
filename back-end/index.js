const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const PORT = 3001;
const app = express();
const model = require('./model');
const boom = require('@hapi/boom');
const cors = require('cors');

model.insertData();

app.use(cors());

app.use(bodyParser.json());

app.use('/', routes);

app.use((err, _req, res, _next) => {
  if (!boom.isBoom(err)) return res.status(500).send(`${err.message}`);

  res.status(err.output.statusCode).send(`${err.output.payload.message}`);
});

app.listen(PORT, console.log(`App listening at port ${PORT}.`));
