require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
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
      console.log('Connected to MongoDB');
      // Start your application or perform other operations
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });
} catch (err) {
  console.log(err);
}

const testRoute = require('./routes/routes');
const registerRoute = require('./routes/routes');
const homeRoute = require('./routes/routes');
const loginRoute = require('./routes/routes');
const authRoute = require('./routes/routes');
const { uploadRoute, getUploadRoute, getUsername } = require('./contols/userControlls');

app.use('/test', testRoute);
app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/', homeRoute);
app.use('/auth', authRoute);
app.use('/upload', uploadRoute);
app.use('/upload', getUploadRoute);
app.use('/user', getUsername);

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
