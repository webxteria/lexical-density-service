// Dependencies
const express = require('express');
const app = express();
const chalk = require('chalk');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

// Imports
const config = require('./src/utils/config');
const appRoutes = require('./src/routes/appRoutes');
const wordsRoutes = require('./src/routes/wordsRoutes');

// HTTP logs
app.use(morgan(':method :url :response-time ms'))

// Middleware
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

//routes
app.get('/', (req, res) => res.send('Hello World')); // server status route
app.use('/api', appRoutes); // route for complexity
app.use('/api', wordsRoutes); // route to all words

//DB connection
mongoose.set('useCreateIndex', true);
mongoose.connect(
    config.MONGODB_URI
);

//success message on DB connection
mongoose.connection.on('connected', () => {
    console.log(chalk.green.bold('Connected to Mongo!'));

    //success message on DB connection
    app.listen(config.PORT, () => {
        console.log(
            chalk.green(
                'Lexical Density Calculator is running: http://localhost:' +
                config.PORT
            )
        );
    });
});
