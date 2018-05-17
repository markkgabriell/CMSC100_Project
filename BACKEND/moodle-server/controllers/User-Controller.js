const User = require('mongoose').model('User');

exports.login = (req, res) => {
  const _id = req.body._id;

  User.findOne({ _id }, (err, user) => {
    if(err){
      res.send(404);
    }else{
      res.send(200);
    }
  })
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
