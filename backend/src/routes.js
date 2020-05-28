const express = require('express');

const routes = express.Router();

routes.post('/users', (req, res) => {
  //acessar query params
  return res.json(req.body);

})

module.exports = routes;