
let connectionString = "";

if (process.env.NODE_ENV === "production") {
  // use Atlas DB
  connectionString = "mongodb+srv://2HEADS:1234567890@cluster0.69tuqnn.mongodb.net/pizza-hub";
} else {
  // use local DB
  connectionString = "mongodb://127.0.0.1:27017/pizzahub";

}

module.exports = {
  connectionString,
};