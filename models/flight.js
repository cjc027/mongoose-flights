const mongoose = require('mongoose');

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Delta', 'Southwest', 'United'],
    required: true
  },
  airport: {
    type: String,
    default: 'DEN',
    enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    required: true
  },
  departs: {
    type: String,
    default: function () {
      return new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
      // return Date.now() + 365*24*60*60*1000
    }
  }
});

module.exports = mongoose.model('Flight', flightSchema);