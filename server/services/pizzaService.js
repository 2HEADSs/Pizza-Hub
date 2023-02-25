const Pizza = require("../models/Pizza");

async function getAll() {
    return Pizza.find({});
}

module.exports = {
    getAll,
};
