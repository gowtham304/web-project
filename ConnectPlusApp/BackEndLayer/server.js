const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose');
 config = require('./DBConnection');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);


const registrationRoute = require('./routes/resgistrationRoute');
const loginRoute = require('./routes/loginRoute')


const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api', registrationRoute);
app.use('/login', loginRoute );
const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});
