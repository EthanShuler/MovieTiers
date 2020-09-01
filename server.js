const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const movies = require('./routes/api/movies');

const app = express();

// BodyParser Middleware

app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// connect to mongo
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// use routes
app.use('/api/movies', movies);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));