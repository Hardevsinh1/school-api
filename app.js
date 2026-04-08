const express = require("express");
require("dotenv").config();
require("./config/db");

const app = express();
const schoolRoutes = require("./routes/schoolRoutes");

app.use(express.json());
app.use("/", schoolRoutes);

app.get("/", (req, res) => {
  res.send("API is working");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});