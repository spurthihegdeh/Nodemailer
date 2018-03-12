var mongoose = require('mongoose');


var nameSchema = new mongoose.Schema({
    name: String,
    component: String,
    place: String,
    latitude: Number,
    longitude: Number
   });

   var Customer = mongoose.model('customer',nameSchema);
  // Mongoose automatically looks for the plural version of your model name and creates a schema with an s

   module.exports = Customer;