// const connectionString = "mongodb://127.0.0.1:27017/pizzahub";
const connectionString = "mongodb+srv://2HEADS:1234567890@cluster0.69tuqnn.mongodb.net/pizza-hub";
//TODO ENV FOR DEPLOY
module.exports = {
    connectionString,
};


// const mongoose = require('mongoose');
// require('dotenv').config()

// function initDatabase(){
//     mongoose.set('strictQuery', true)
//     return mongoose.connect(process.env.CONNECTIONSTRING);
// }

// module.exports = initDatabase;