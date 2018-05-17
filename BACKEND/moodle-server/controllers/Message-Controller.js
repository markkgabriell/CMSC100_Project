const Message = require('mongoose').model('Message');

exports.add = (req, res) => {
  const newMessage = new Message(req.body);

  newMessage.save((err, message) => {
    if (err) { res.send({}); }
    else {
      res.json(post);
    }
  });
}

exports.delete = (req, res) => {
  const _id = req.body._id;
  Message.remove({ _id }, (err) => {
    if (err) {
      res.send(false);
    } else {
      
      res.send(true);
    }
  });
}

exports.getById = (req, res) => {
  const _id = req.body._id;

  Message.findOne({ _id }, (err, message) => {
    if (err) {
      console.log(err);
      res.send({});
    } else {
      res.send(message);
    }
  });
}

exports.getAll = (req, res) => {
  Message.find({}, (err, message) => {
    if (err) {
      res.send({});
    } else {
      res.send(message)
    }
  });
}
