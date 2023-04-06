const { pizzaController } = require("./controllers/pizzaController");
const { authController } = require("./controllers/authController")

const router = require("express").Router();

router.get("/", (req, res) => {
    console.log(req);
    res.json({ message: "Rest Service Operational" });
});

router.use('/pizza', pizzaController);
router.use('/auth', authController)

module.exports = router;
