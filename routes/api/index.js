const router = require("express").Router();
const foodRoutes = require("./foods");
const userRoutes = require("./users")
// Food routes
router.use("/users", userRoutes);
router.use("/foods", foodRoutes);
router.get("/", (req, res) => {
    res.send("You hit /api!")
})

module.exports = router;
