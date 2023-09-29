const express = require('express');
const swaggerUI = require('swagger-ui-express');
const cors = require('cors');
const morgan = require('morgan');
const swaggerDocument = require('./docs');
const videoRoutes = require('./src/routes/video.routes');

const app = express();
const { APP_NAME } = process.env;

/* MIDDLEWARES */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

/* REGISTERING APP ROUTES */
app.use('/api/videos', videoRoutes);
// app.use('/buth', brouter);

app.get(['/', '/api'], (_, res) => {
  res.status(200).json(`Welcome ${APP_NAME} API`);
});

app.use('*', (_, res) => {
  res.status(404).json({ error: 'Not Found' });
});

module.exports = app;
