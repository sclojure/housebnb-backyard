module.exports = {

  // Query homes from a given search.
  //  api/homes?search=SEARCHTERM
  getHomesSearch: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { search } = req.query;

    dbInstance.get_homes_search([ search + '%'])
      .then(response => res.status(200).send(response))
      .catch(error => console.log(error))
  },



  //Get Single Home Listing
  //  api/homes/homeId
  getHome: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { homeId } = req.params;

    dbInstance.get_home({ homeId })
    .then(response => res.status(200).send(response))
    .catch(error => console.log(error))
  },



  // Add Home
  //
  addHome: (req, res, next) => {
    const dbInstance = req.app.get('db');
    // const { ALL-HOME-INFO } = req.body; also add to db instance

    dbInstance.add_home()
      .then(response => res.status(200).send(response))
      .catch(error => console.log(error))
  },


  // Update Home
  //
  updateHome: (req, res, next) => {
    const dbInstance = req.app.get('db');
    // const { ALL-HOME-INFO } = req.body; also add to db instance

    dbInstance.update_home()
      .then(response => res.status(200).send(response))
      .catch(error => console.log(error))
  },


  // Delete Home
  // api/homes/homeId
  deleteHome: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { homeId } = req.params;

    dbInstance.delete_home({ homeId })
      .then(response => res.status(200).send(response))
      .catch(error => console.log(error))
  },

  // Delete Booking
  // api/homes/bookingId
  deleteBooking: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { bookingId } = req.params;

    dbInstance.delete_booking({ bookingId })
      .then(response => res.status(200).send(response))
      .catch(error => console.log(error))
  },




}
