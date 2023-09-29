require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'http://127.0.0.1';

app.listen(PORT, () => console.log(`Visit app at: ${HOST}:${PORT}/`));
