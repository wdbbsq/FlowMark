const mongoose = require('mongoose');
const stringToHex = require('../stringToHex');
var iconv = require('iconv-lite');

const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId;

const flowSchema = new Schema({
  id: ObjectId,
  time: Number,
  ipv4_srcip: String,
  ipv4_dstip: String,
  tcp_srcport: Number,
  tcp_dstport: Number,
  data: {
    type: String,
    get: v => {
      v = iconv.decode(v, 'utf-8');
      // v = stringToHex(v);
    }
  }
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
