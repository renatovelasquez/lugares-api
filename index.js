const express = require('express');
const app = express();

const { config } = require('./config/index');
const foursquareApi = require('./routes/foursquare');

const { logErrors, wrapError, errorHandler } = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');
const debug = require('debug')('app:server');

//body parser
app.use(express.json());

//routes
foursquareApi(app);

//Catch 404
app.use(notFoundHandler);

//Error middleware
app.use(logErrors);
app.use(wrapError);
app.use(errorHandler);

app.listen(config.port, function() {
  debug(`Escuchando http://localhost:${config.port}`);
});