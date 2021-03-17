require('dotenv/config');

const server = require('./config/server');

server.listen(process.env.APP_PORT);