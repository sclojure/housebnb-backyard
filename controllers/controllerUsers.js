module.exports = {

  //Get  User Profile
  // /api/user/2
  getUserProfile: (req, res, next) => {
    const dbInst = req.app.get('db');
    const { userId } = req.params;
    dbInstance.users.get_profile({userId})
      .then(response => res.status(200).send(response))
      .catch(error => console.log(error))
  },

  //Get  User Homes (meaning user listings, not bookings)
  // /api/user/2/homes
  getUserHomes: (req, res, next) => {
    const dbInst = req.app.get('db');
    const { userId } = req.params;
    dbInstance.users.get_user_homes({userId})
      .then(response => res.status(200).send(response))
      .catch(error => console.log(error))
  },

  //Get  User Homes (meaning user listings, not bookings)
  // /api/user/2/bookings
  getUserBookings: (req, res, next) => {
    const dbInst = req.app.get('db');
    const { userId } = req.params;
    dbInstance.users.get_user_bookings({userId})
      .then(response => res.status(200).send(response))
      .catch(error => console.log(error))
  },


  //Update User
  // /api/user/update/2
  updateUser: (req, res, next) => {
    const dbInst = req.app.get('db');
    // const {ALL NEEDED USER INFO} = req.body; also add to dbInstance
    const { userId } = req.params;
    dbInstance.users.update_user({userId})
      .then(response => res.status(200).send(response))
      .catch(error => console.log(error))
  },


  //Add User
  // /api/user
  addUser: (req, res, next) => {
    const dbInst = req.app.get('db');
    const { userInfo } = req.body;
    dbInstance.users.add_user({userInfo})
      .then(response => res.status(200).send(response))
      .catch(error => console.log(error))
  }



}
