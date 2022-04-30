require('dotenv').config();

const Express = require('express');
const cors = require('cors');
const app = Express();


const BodyParser = require('body-parser');
const PORT = process.env.PORT || 8089;

const http = require('http');
const server = http.createServer(app);

const { Pool, Query } = require("pg");
const dbParams = require("./lib/db");
const db = new Pool(dbParams);
db.connect()
.then(console.log('connected to db'))
.catch((err) => console.log(err));

const userRoute = require('./routes/users');

app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(Express.static('public'));

app.use('/', userRoute(db));

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})