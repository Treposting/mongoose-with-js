const app = require("./app");
const dbConnect = require("./utils/dbConnect");
const log = require("./utils/logger");

const port = process.env.PORT || 5000;
const startServer = async () => {
    try {
        app.listen(port, () => {
            log.info(`Server is running on port ${port}`);
            dbConnect();
        }
        );
    } catch (err) {
       log.error(err);
    }
}

startServer();