const router = require("express").Router();
const foodsController = require("../../controllers/foodsController");

// Matches with "/api/books"
router.route("/")
  .get(foodsController.findAll)
  .post(foodsController.create);

// Matches with "/api/foods/:search"
router.route("/:search")
  .get(foodsController.findAll)

  // "api/foods/item/:id"
router.route("/item/:id")
  .get(foodsController.addItem)


  module.exports = router;
