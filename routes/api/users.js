const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
  .get(userController.findUsers)
  .post(userController.createUser)
// user routes go here
///:username
router.route("/:id")
  .get(userController.getUser)
  
router.route("/populate/:id")
  .get(userController.populateList)

//populate
//create user

module.exports = router;