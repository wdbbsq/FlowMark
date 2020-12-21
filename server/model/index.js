const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId;

const flowSchema = new Schema({
  id: ObjectId,
  data: String,
  time: Number,
  ipv4_scrip: String,
  ipv4_dstip: String,
  tcp_srcport: Number,
  tcp_dstport: Number,
});

const featureSchema = new Schema({
  id: ObjectId,
  type: String,
  reg: String,
  description: String,
});

const Flow = model('nettrafficdatas', flowSchema);
const Feature = model('features', featureSchema);

module.exports = { Flow, Feature };