const express = require("express");

const app = express();

app.use(express.json({ extended: true }));

app.use("/api/qr", require("./routes/qr.routes"));

const PORT = 5000;
async function start() {
  app.listen(PORT, () =>
    console.log(`App has been started at port ${PORT}...`)
  );
}

start();
