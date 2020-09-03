const db = require("../models");

// Defining methods for the FoodsController
module.exports = {
  findAll: function (req, res) {
    db.Foods
      .find({ genre: req.params.search })
      .sort({ reference: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Foods
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function (req, res) {
    db.Foods
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Foods
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Foods
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },


  addItem: function (req, res) {
    console.log("current user", req.query.currentUser)
    db.Foods.findOne({_id: req.params.id})
      .then(({ _id }) => db.Users.findOneAndUpdate({ id: req.query.currentUser }, { $push: { groceryList: _id } }, { new: true }))
      .then(food => res.json(food))
      .catch(err => console.log(err));

  }


};
