const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

var corsOption = {
  origin: ["http://localhost:8080"],
};
// app.use(cors(corsOption));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({
    msg: "Welcome to here",
  });
});

const tutorialRouter = require("./routes/tutorial.route");

app.use("/tutorial", tutorialRouter);

const PORT = process.env.PORT || "3000";

app.listen(PORT, () => {
  console.log("Server is running at port", PORT);
});
