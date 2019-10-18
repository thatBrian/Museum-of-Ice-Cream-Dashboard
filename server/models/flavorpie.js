const mongoose = require('mongoose');

const FlavorPie = new mongoose.Schema({
    flavorOptions: {
        chart: {
        },
        labels: [],
        legend: {
        }
    },
    flavorSeries: [],
});

module.exports  = mongoose.model('flavorpie', FlavorPie);
