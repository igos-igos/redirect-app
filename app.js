const express = require('express');

require('dotenv').config();

const app = express();

app.use(express.json({ extended: true }));

app.use('/stores/qr', require('./routes/qr.routes'));

const PORT = process.env.APP_PORT | 5050;
async function start() {
  app.listen(PORT);
}

start();
