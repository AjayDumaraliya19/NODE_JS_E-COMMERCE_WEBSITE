const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config/config");
const routes = require("./routes/v1");
const { connectDB } = require("./db/dbconnection");

const app = express();

/** Create server using http */
const server = http.createServer(app);

server.listen(config.port, () => {
  console.log("server listning port nuber 3000!");
});

/** Databse Connection */
connectDB();

/** Create Server using express js */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/** Routes connection */
app.use("/v1", routes);

/** Whenever route not create and you try to use that route then throw error. */
app.use((req, res, next) => {
  next(new Error("Route not found!"));
});
