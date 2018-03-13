const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    massive = require('massive');
const ctrlUsers = require('./controllers/controllerUsers');
const ctrlHomes = require('./controllers/controllerHomes');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());




// ===== Database Connection ============

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db);
});




// ===== EndPoints ============

app.get('/api/user/:userId', ctrlUsers.getUserProfile)
app.get('/api/user/:userId/homes', ctrlUsers.getUserHomes)
app.get('/api/user/:userId/bookings', ctrlUsers.getUserBookings)
app.put('/api/user', ctrlUsers.addUser)
// The above may be able to be cleaned up with one query/http call rather than 3 separate. Depending on thow the front end will be set up for these pages.
app.put('/api/user/update/:userId', ctrlUsers.updateUser)


app.get('/api/homes', ctrlHomes.getHomesSearch)
app.get('/api/home/:homeId', ctrlHomes.getHome)
app.post('/api/add', ctrlHomes.addHome)
app.put('/api/home/:homeId', ctrlHomes.updateHome)
app.delete('/api/delete/:homeId', ctrlHomes.deleteHome)
app.delete('/api/delete/:bookingId', ctrlHomes.deleteBooking)




// ===== Listen ===============
const port = 3000;
app.listen(port, () => {
  console.log('I like to listen. I have learned a great deal from listening carefully. Most people never listen. Im listening on port: ', port);
})
