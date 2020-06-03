const mongoose = require('mongoose');

const tripsSchema = new mongoose.Schema({
    "tripname": {
      "type": "String"
    },
    "detail": {
      "type": "String"
    },
    "duration": {
      "type": "String"
    },
    "totalbooked": {
      "type": "Number"
    }
});

const Trips = mongoose.model('Trips', tripsSchema);

const pricingSchema = new mongoose.Schema({
  "price": {
    "type": "Number"
  },
  "date": {
    "type": "Number"
  },
  "fee_cancellation": {
    "type": "Number"
  },
  "trip_availability": {
    "type": "Number"
  },
  "tripType": {
    type: mongoose.Schema.Types.ObjectId, ref: 'Trips'
  },
  "tripname": {
    "type": "String"
  }
});

const Pricing = mongoose.model('Pricing', bookingSchema);

const bookingSchema = new mongoose.Schema({
  "price": {
    "type": "Number"
  },
  "date": {
    "type": "Number"
  },
  "fee_cancellation": {
    "type": "Number"
  },
  "trip_availability": {
    "type": "Number"
  },
  "tripType": {
    type: mongoose.Schema.Types.ObjectId, ref: 'Trips'
  },
  "tripname": {
    "type": "String"
  },
  "booking_id": {
    "type": "String"
  }, 
  "adults": {
    "type": "Number"
  },
  "children": {
    "type": "Number"
  }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Trips;