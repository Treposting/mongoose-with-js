const app = require("./app");

const port = process.env.PORT || 5000;
const startServer = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        }
        );
    } catch (err) {
        console.log(err);
    }
}

startServer();