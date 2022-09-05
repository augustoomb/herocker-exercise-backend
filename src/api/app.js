const express = require('express');
const cors = require('cors');
const rescue = require('express-rescue');
const UserController = require('../controllers/user');
const errorMiddleware = require('../middlewares/error');

const app = express();

app.get('/users', rescue(UserController));

app.use(errorMiddleware); 
app.use(cors());

module.exports = app;
