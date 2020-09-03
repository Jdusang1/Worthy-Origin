const db = require("../models");

// Defining methods for the FoodsController
module.exports = {
  findAll: function (req, res) {
    db.Foods
      .find({ product: req.params.search })
      .sort({ product: -1 })
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

  // createUser: function (req, res) {
  //   db.Users
  //     .create({ userName: "" })
  //     .then(dbUser => console.log(dbUser))
  //     .catch(err => res.status(422).json(err));
  // },

  // getUser: function (req, res) {
  //   db.Users
  //     .find({ userName: "" })
  //     .then(dbUser => console.log(dbUser))
  //     .catch(err => res.status(422).json(err));

  // },

  // addItem: function (req, res) {
  //   db.Foods.findOne(req.params.id)
  //     .then(({ _id }) => db.Users.findOneAndUpdate({}, { $push: { groceryList: _id } }, { new: true }))
  //     .then(res => res.json(res))
  //     .catch(err => res.status(422).json(err));

  // },

  // populateList: function (req, res) {
  //   db.Users.find({})
  //     .populate("groceryList")
  //     .then(dbUser => {
  //       res.json(dbUser);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // }

};
