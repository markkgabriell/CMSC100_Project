const Post = require('mongoose').model('Post');

exports.add = (req, res) => {
  const newPost = new Post(req.body);

  newPost.save((err, post) => {
    if (err) { res.send({}); }
    else {
      res.json(post);
    }
  });
}

exports.delete = (req, res) => {
  const _id = req.body._id;
  Post.remove({ _id }, (err) => {
    if (err) {
      res.send(false);
    } else {
      
      res.send(true);
    }
  });
}

exports.getById = (req, res) => {

  Post.find({class: req.params.class}, (err, post) => {
    if (err) {
      console.log(err);
      res.send(404);
    } else {
      res.send(post);
    }
  });
}

exports.getAll = (req, res) => {
  Post.find({}, (err, post) => {
    if (err) {
      res.send({});
    } else {
      res.send(post)
    }
  });
}
