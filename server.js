// Imports
const express = require('express');
const logger = require('morgan');
const colors = require('colors');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const errorHandler = require('./src/middlewares/error');
require('dotenv').config({ path: './src/config/.env' });

const port = process.env.PORT || 3000;

const app = express();

// routes ..
const user = require('./src/routes/user.route');
const Videogame = require('./src/routes/videogames.route');

// uses
// ! Descomentar en desarrollo
app.use(logger('dev'));
app.use(express.json());
app.use(cors({ origin: true }));
app.use(cookieParser());

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// Routes
app.use('/api/v1/user', user);
app.use('/api/v1/videogames', Videogame);

app.use(errorHandler);

app.listen(port, console.log(`Server run in ${port}`.underline.blue));
