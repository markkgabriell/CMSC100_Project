const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  author: { type: String, default: '' },
  title: { type: String, default: '' },
  content: { type: Array, default: [] },
  timestamp: { type: String, default: '' },
  comments: { type: Array, default: [] },
  class: {type: String, default : ''}
},{collection: 'Post'});

mongoose.model('Post', PostSchema);