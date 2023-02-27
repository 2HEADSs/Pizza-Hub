const Pizza = require("../models/Pizza");

async function getAll() {
    return Pizza.find({});
}

async function create(data) {
    return Pizza.create(data)
};

module.exports = {
    getAll,
    create
};
