const router = require("express").Router();
const foodsController = require("../../controllers/foodsController");

// Matches with "/api/foods"
router.route("/")
  .get(foodsController.findAll)

// Matches with "/api/foods/:search"
router.route("/:search")
  .get(foodsController.findAll)

// "api/foods/item/:id"
router.route("/item/:id")
  .get(foodsController.addItem)

router.route("/remove/:id")
  .get(foodsController.removeItem)

module.exports = router;
