require('dotenv').config();

const Express = require('express');
const cors = require('cors');
const app = Express();
const axios = require('axios');

const BodyParser = require('body-parser');
const PORT = process.env.PORT || 8081;

const { Pool, Query } = require("pg");
const dbParams = require("./lib/db");
const db = new Pool(dbParams);
db.connect();

app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(Express.static('public'));

const http = require('http');
const server = http.createServer(app);

const usersRoute = require('./routes/users');
app.use('/users', usersRoute(db));

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})