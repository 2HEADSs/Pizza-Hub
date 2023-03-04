const pizzaController = require("express").Router();

const { getAll, create } = require("../services/pizzaService");

pizzaController.get("/", async (req, res) => {
    try {
        const pizza = await getAll();
        res.status(200).json(pizza);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

pizzaController.post("/", async (req, res) => {
    try {
        const pizza = await create(req.body);
        res.json(pizza);
        // res.status(200).json(pizza);
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log(error);
    }
});



pizzaController.get('/:id', async (req, res) => {
    try {
        const pizza = await getById(req.params.id)
        if (!pizza) {
            throw new Error('Pizza does not exist')

        }
        return res.status(200).json(bike)
    } catch (error) {
        res.status(400).json({ error })

    }
});

module.exports = {
    pizzaController
}
