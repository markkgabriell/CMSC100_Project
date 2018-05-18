const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
  title: { type: String, default: '' },
  posts: { type: Array, default: [] },
  teacher: { type: String, default: '' },
  students: { type: Array, default: [] }
},{collection: 'Class'});

mongoose.model('Class', ClassSchema);