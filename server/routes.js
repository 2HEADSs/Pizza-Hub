const router = require("express").Router();

router.get("/", (req, res) => {
    res.json({message: 'Rest Service Operational'})
});


router.use('/pizza', pizzaController)
router.use('/', authController)


module.exports =router