UPDATE properties
SET booked = NOT booked
WHERE property_id = ${propertyId}
