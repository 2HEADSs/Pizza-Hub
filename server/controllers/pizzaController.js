const pizzaController = require("express").Router();

const { getAll, create } = require("../services/pizzaService");

pizzaController.get("/", async (req, res) => {
    try {
        const pizza = await getAll();
        console.log('get');
        res.status(200).json(pizza);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

pizzaController.post("/", async (req, res) => {
    console.log(req.body);
    try {
        const pizza = await create(req.body);
        console.log(pizza);
        res.json(pizza);
        // res.status(200).json(pizza);
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log(error);
    }
});

module.exports = {
    pizzaController
}
