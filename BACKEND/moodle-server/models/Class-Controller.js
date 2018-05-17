const Class = require('mongoose').model('Class');

exports.add = (req, res) => {
  const newMovie = new Movie(req.body);

  newMovie.save((err, movie) => {
    if (err) { res.send({}); }
    else {
      res.json(movie);
    }
  });
}

exports.getAll = (req, res) => {
  User.find({}, (err, user) => {
    console.log("blep") 
    if (err) {
      console.log(err) 
      res.send({});
    } else {
      console.log(user)
      res.send(user)
    }
  });
}
