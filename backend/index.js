const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

require('./routes/pump')(app);

const port = process.env.PORT || 8081;
const server = http.createServer(app);
server.listen(port);
