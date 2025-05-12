const express = require("express");
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const newMessageRouter = require("./routes/newMessageRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);
app.use("/new", newMessageRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Mini messaging app - listening on port ${PORT}`);
});
