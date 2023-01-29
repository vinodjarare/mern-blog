const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./config/db");
const app = express();
const cors = require("cors");
dotenv.config({ path: "./config/config.env" });
const port = process.env.PORT || 4000;

//middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//connect database
connectDatabase();

//routes
app.use("/api", require("./routes/blog"));
app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
