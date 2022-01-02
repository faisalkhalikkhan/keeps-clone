const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;
const URL =
  "mongodb+srv://123:123@cluster0.ein4s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello :)");
});

const noteRoutes = require("./routers/note.route");
app.use("/notes", noteRoutes);

mongoose
  .connect(URL, { useNewUrlParser: true })
  .then(() => {
    app.listen(port, () => console.log(`server is running on port ${port}`));
  })
  .catch((e) => console.log(e));
