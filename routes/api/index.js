const router = require("express").Router();
const foodRoutes = require("./foods");

// Food routes
router.use("/foods", foodRoutes);
router.get("/", (req, res) => {
    res.send("You hit /api!")
})

module.exports = router;
