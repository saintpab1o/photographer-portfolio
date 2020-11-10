const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const bodyParser = require("body-parser");
const contact = require('./routes/api/contacts')
const group = require('./routes/api/imageGroups')
var cors = require("cors");
const path = require("path");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

  app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from Here");
});


app.use("/api", contact);
app.use("/api", group);



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));


