const express = require('express');
const controller = require('../controller');
const middleware = require('../middleware/auth');

const routers = express.Router();

routers
  .get('/', middleware.validation, controller.searchController)

module.exports = routers;
