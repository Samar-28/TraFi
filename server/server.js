const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const routes = require("./routes");
const connectToMongo = require("./config/connection");

const PORT = process.env.PORT;
const app = express();
connectToMongo();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

app.use(routes);

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
