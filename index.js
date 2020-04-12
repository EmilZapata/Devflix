const express = require('express');
const config = require('./config');

const app = express();

app.use('/hello', (req, res) => {
  res.send('Hola mundo');
});

app.listen(config.port, () => {
  console.log(`API Server Listening on http://localhost:${config.port}`);
});