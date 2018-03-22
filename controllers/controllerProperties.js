module.exports = {

  // Query homes from a given search.
  //  api/homes?search=SEARCHTERM
  getPropertiesSearch: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { search } = req.query;

    dbInstance.properties.get_properties_search([ search + '%'])
      .then(response => res.status(200).send(response))
      .catch(error => console.log(error))
  },



  //Get Single Property Listing
  //  api/homes/propertyId
  getProperty: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { propertyId } = req.params;

    dbInstance.properties.get_single_property({ propertyId })
    .then(response => res.status(200).send(response))
    .catch(error => console.log(error))
  },



  // Add Property
  //
  addProperty: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { property_id, property_user, property_name, summary, image_med, street, city, state, country, postal_code, latitue, longitude, property_type, room_type, price } = req.body;

    dbInstance.properties.add_property({ property_id, property_user, property_name, summary, image_med, street, city, state, country, postal_code, latitue, longitude, property_type, room_type, price })
      .then(response => res.status(200).send(response))
      .catch(error => console.log(error))
  },


  // Update Property
  //
  updateProperty: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { property_id, property_user, property_name, summary, image_med, street, city, state, country, postal_code, latitue, longitude, property_type, room_type, price } = req.body;

    dbInstance.properties.update_property({ property_id, property_user, property_name, summary, image_med, street, city, state, country, postal_code, latitue, longitude, property_type, room_type, price })
      .then(response => res.status(200).send(response))
      .catch(error => console.log(error))
  },


  // Delete Property
  // api/homes/propertyId
  deleteProperty: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { propertyId } = req.params;

    dbInstance.properties.delete_property({ propertyId })
      .then(response => res.status(200).send(response))
      .catch(error => console.log(error))
  },

  // Delete Booking
  // api/homes/bookingId
  deleteBooking: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { bookingId } = req.params;

    dbInstance.properties.delete_booking({ bookingId })
      .then(response => res.status(200).send(response))
      .catch(error => console.log(error))
  },




}
