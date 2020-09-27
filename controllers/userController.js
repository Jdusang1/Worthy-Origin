const db = require("../models");

// Defining methods for the FoodsController
module.exports = {
  createUser: function (req, res) {
    db.Users
      .create(req.body)
      .then(dbUser => console.log("create user", dbUser))
      .catch(err => res.status(422).json(err));
  },
//runs when user logs in through Auth0 and pulls data for grocery list IF user is found. If no user if found, it creates new user. 
  getUser: function (req, res) {
    db.Users
      .findOne({ id: req.params.id })
      .then(dbUser => {
        console.log("get user", dbUser)
        res.json(dbUser)
      })
      .catch(err => res.status(422).json(err));
  },
//might not be using this???
  findUsers: function (req, res) {
    db.Users
      .find({})
      .then(dbUser => console.log("find user", dbUser))
      .catch(err => res.status(422).json(err));
  },
//populates the users grocery list and updates whenever changes are made 
  populateList: function (req, res) {

    db.Users.findOne({ id: req.params.id })
      .populate("groceryList")
      .then(dbUser => {
        console.log(dbUser)
        res.json(dbUser);
      })
      .catch(err => {
        console.log(err)
        res.json(err);
      });
  }

};
