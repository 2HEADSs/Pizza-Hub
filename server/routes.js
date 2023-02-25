const router = require("express").Router();

router.get("/", (req, res) => {
    res.json({message: 'Rest Service Operational'})
});


router.use('/pizza', pizzaController)
// router.use('/auth', authController)


module.exports =router