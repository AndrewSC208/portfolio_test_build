const config = require('./config/config');

const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');

const helmet     = require('helmet');
const bodyParser = require('body-parser');
const morgan     = require('morgan');

const routes = require('./routes');

const port = config.server.port;
const app  = express();

// require('./libraries/promisify-all')(['mongoose']);

// mongoose.connect(config.mongo.url);

// need to add cors here, but I need to find out how and what

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use(express.static(__dirname + "/public"));
app.use('/', routes);

app.listen(port, () => { console.log(`Magic happens on port ${port}`); });

module.exports = app;
