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

const contentfeatureSchma = new Schema({
  id: ObjectId,
  flow_id: String,
  hot: String,
  num_failed_logins: String,
  logged_in: String,
  num_compromised: String,
  root_shell: String,
  su_attempted: String,
  num_root: String,
  num_file_creations: String,
  num_shells: String,
  num_access_files: String,
  num_outbound_cmds: String,
  is_hot_login: String,
  is_guest_login: String,
});

const Flow = model('nettrafficdatas', flowSchema);
const Feature = model('features', featureSchema);
const Contentfeature = model('contentfeatures', contentfeatureSchma);

module.exports = { Flow, Feature, Contentfeature };
