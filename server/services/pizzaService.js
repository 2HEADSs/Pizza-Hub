const Pizza = require("../models/Pizza");

async function getAll() {
    return Pizza.find({});
}

async function create(data) {
    //TODO add user(creator) to pizza
    return Pizza.create(data)
};

module.exports = {
    getAll,
    create
};
