const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, default: '' },
  name: { type: String, default: '' },
  username: { type: String, default: '' },
  password: { type: String, default: '' },
  usertype: { type: String, default: '' }
});

mongoose.model('User', UserSchema);