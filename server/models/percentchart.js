const mongoose = require('mongoose');

const PercentChart = new mongoose.Schema({
  percentOptions: {
  },
  percentSeries:[]
});

module.exports  = mongoose.model('PercentChart', PercentChart);
