const express = require("express");
const app = express();
const cors = require('./middlewares/cors')
import { connectionString } from './connectionString'
const { mongoose } = require("mongoose");
const router = require("./routes");
const session = require("./middlewares/session");
mongoose.set('strictQuery', true);

const initDB = () => mongoose.connect(connectionString);

startServer();


async function startServer() {
    initDB();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cors())
    app.use(session())
    // trimbody
    app.use(router);
    const PORT = process.env.PORT || 3030;
    app.listen(PORT, () => {
        console.log(process.env.PORT);
        console.log(`Server started on port ${PORT}`);
    });
}
