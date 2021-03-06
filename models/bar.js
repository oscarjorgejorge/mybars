'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BarSchema = Schema({
  username: String,
  password: String,
  barname: String,
  price: Number,
  hours: String,
  description: String,
  location: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: [Number]
  },
  address: String
});
BarSchema.index({ location: '2dsphere' });

const Bar = mongoose.model('Bar', BarSchema);

module.exports = Bar;
