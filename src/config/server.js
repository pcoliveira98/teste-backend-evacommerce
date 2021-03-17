const express = require('express');
const path = require('path');

const routes = require('../App/routes');

const server = express();

server.use(express.json());
server.use('/images', express.static(path.resolve(__dirname, '..', 'temp', 'uploads')));
server.use(routes);


module.exports = server;