const Mongoose = require("mongoose");

const modelName = "icecream";

//Employee Model without any fixed schema
const NoSchema = new Mongoose.Schema({},
  {strict:false }
);

module.exports = Mongoose.model(modelName, NoSchema);