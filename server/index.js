/* eslint-disable no-console */
require('newrelic');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes.js');
const cors = require('cors');
const compression = require('compression');
const app = express();
const PORT = process.env.PORT || 3000;
const middleware = require('./middleware.js');

const db = require('./queries.js')

app.listen(PORT, () => console.log(`\x1b[32m Server listening on PORT\x1b[36m ${PORT}`));

app.use(cors());
app.use(morgan('tiny'));
// app.use(express.json());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(middleware.httpRequestLogger);
app.use(compression());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api/trip', router);

app.use('/loaderio-691c134edad23dacda4b1ffa4a3d626e', express.static(path.join(path.join(__dirname, '../client/dist/'))));












app.get('/info', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

/*
http://localhost:3000/users
http://localhost:3000/users/1
curl -X POST -d "name=Elaine" -d "email=elaine@example.com" http://localhost:3000/users
curl --data "name=Elaine&email=elaine@example.com" http://localhost:3000/users
curl -X PUT -d "name=Kramer" -d "email=kramer@example.com" http://localhost:3000/users/1
curl -X "DELETE" http://localhost:3000/users/3
*/