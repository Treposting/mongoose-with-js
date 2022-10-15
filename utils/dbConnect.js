const log = require("./logger");
const colors = require("colors");
const { default: mongoose } = require("mongoose");

const MONGO_URL = process.env.MONGO_URI;
const dbConnect = async () => {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        log.info(`MongoDB Connected 🛢`.yellow.underline.bold);
    } catch (err) {
        log.error(err);
    }
}

module.exports = dbConnect;