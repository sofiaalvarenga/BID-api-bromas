const express = require("express");
const app = express();
const port = 8000;

//Fire mongoose.connect statement to initialize our database connection
require('./server/config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));
const JokesRoutes = require('./server/routes/jokes.routes');

JokesRoutes(app);
app.listen(port);