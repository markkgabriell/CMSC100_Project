const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  sender: { type: String, defualt: '' },
  recepient: { type: String, default: '' },
  content: { type: Array, default: [] },
  timestamp: { type: String, default: '' },
  status: { type: Boolean, default: false }
},{collection: 'Message'});

mongoose.model('Message', MessageSchema);