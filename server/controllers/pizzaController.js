const pizzaController = require("express").Router();

const { getAll } = require("../services/pizzaService");

pizzaController.get("/", async (req, res) => {
    try {
        const pizza = await getAll();
        res.status(200).json(pizza);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
