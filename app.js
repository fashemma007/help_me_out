const express = require('express');
const swaggerUI = require('swagger-ui-express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const swaggerDocument = require('./docs');
const userRoutes = require('./src/routes/user.routes');

const app = express();
const { APP_NAME } = process.env;

/* MIDDLEWARES */
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

/* REGISTERING APP ROUTES */
app.use('/user', userRoutes);
// app.use('/buth', brouter);

app.use('*', (_, res) => {
  res.status(404).json('Not Found 😥😥😥');
});

app.get(['/', '/home'], (_, res) => {
  res.status(200).json(`Welcome ${APP_NAME} API`);
});

module.exports = app;
