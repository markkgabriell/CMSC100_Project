const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  author: { type: String, defualt: '' },
  content: { type: String, default: '' },
  timestamp: { type: Date, default: Date.now() },
  likeCount: { type: Number, default: 0 },
  post : {type: String, default: ''}
},{collection: 'Comment'});

mongoose.model('Comment', CommentSchema);