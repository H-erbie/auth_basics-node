require("dotenv").config();
require("express-async-handler");

const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");
const mainRouter = require("./routes/main")
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/v1/', mainRouter)

app.use(errorHandler);
app.use(notFound);

const start = () => {
  try {
    app.listen(port, console.log(`server be listening on port: ${port}...`));
  } catch (error) {
    console.log(error)
  }
};
start()
