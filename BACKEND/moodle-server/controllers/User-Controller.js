const User = require('mongoose').model('User');

exports.login = (req, res) => {
  // const _id = req.body.username;
// console.log(req.params.username);
  User.findOne({username: req.params.username}, (err, user) => {
    if(err){
      res.send(404);
    }else{
      console.log(req.params.username);
      console.log(user);
      res.send(user);
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
