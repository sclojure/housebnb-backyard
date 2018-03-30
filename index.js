const express = require('express'),
    jwt = require('jsonwebtoken'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    session = require('express-session'),
    massive = require('massive');
const ctrlUsers = require('./controllers/controllerUsers');
const ctrlProperties = require('./controllers/controllerProperties');
const isLoggedIn = require('./middlewares/isLoggedIn');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(
  session({
      secret: 'whatever',
      resave: false,
      saveUnititialized: false
    })
  );


// ===== Database Connection ============

massive(process.env.CONNECTION_STRING)
  .then(db => {
      app.set('db', db);
    })
  .catch(error => console.log(error));




// ===== EndPoints ============


// Auth Endpoints
app.post('/api/auth/login', ctrlUsers.login);
app.post('/api/auth/register', ctrlUsers.register);


app.get('/api/user/:userId', isLoggedIn, ctrlUsers.getUserProfile)
app.get('/api/user/:userId/homes', isLoggedIn, ctrlUsers.getUserHomes)
app.put('/api/user/update/:userId', isLoggedIn, ctrlUsers.updateUser)

app.get('/api/properties', ctrlProperties.getPropertySearch)
app.get('/api/property/:propertyId', ctrlProperties.getProperty)
app.post('/api/add', isLoggedIn, ctrlProperties.addProperty)
app.put('/api/property/:propertyId/update', isLoggedIn, ctrlProperties.updateProperty)
app.delete('/api/delete/:propertyId', isLoggedIn, ctrlProperties.deleteProperty)

app.put('/api/property/:propertyId/book', isLoggedIn, ctrlProperties.book)



// ===== Listen ===============
const port = 3000;
app.listen(port, () => {
  console.log('I like to listen. I have learned a great deal from listening carefully. Most people never listen. Im listening on port: ', port);
})
