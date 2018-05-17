const Class = require('mongoose').model('Class');

exports.add = (req, res) => {
  const newClass = new Class(req.body);

  newClass.save((err, Class) => {
    if (err) { res.send({}); }
    else {
      res.json(Class);
    }
  });
}

exports.getById = (req, res) => {
  const _id = req.body._id;

  Class.findOne({ _id }, (err, Class) => {
    if (err) {
      console.log(err);
      res.send({});
    } else {
      res.send(Class);
    }
  });
}

exports.delete = (req, res) => {
  const _id = req.body._id;
  Class.remove({ _id }, (err) => {
    if (err) {
      res.send(false);
    } else {
      
      res.send(true);
    }
  });
}


exports.getAll = (req, res) => {
  Class.find({}, (err, Class) => {
    if (err) {
      console.log(err) 
      res.send({});
    } else {
      res.send(Class)
    }
  });
}
