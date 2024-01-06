require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());
app.use(cors());

const port = process.env.PORT || 8080;
app.use(express.json());

const uri = process.env.MONGO_URI;

try {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Connected to MongoDB");
      // Start your application or perform other operations
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
} catch (err) {
  console.log(err);
}

const registerroute = require("../server/routes/register.js");
const homeroute = require("../server/routes/Home.js");
const loginroute = require("../server/routes/login.js");
const authRoute = require("../server/routes/auth.js");
const postUpload = require("../server/routes/upload.js");
const getUploadRoute = require("../server/routes/upload.js");
const Username = require("../server/routes/user.js");
const render = require("../server/routes/render.js");
const BlogPost = require("./models/Post");

app.use("/register", registerroute);
app.use("/login", loginroute);
app.use("/", homeroute);
app.use("/auth", authRoute);
app.use("/upload", postUpload);
app.use("/upload", getUploadRoute);
app.use("/user", Username);
app.use("/render", render);

app.get("/key", async (req, res) => {
  try {
    const response = await BlogPost.find();

    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({
        message: "Data not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
