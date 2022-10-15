const express = require('express')
const app = express()
require('dotenv').config()
const cors = require("cors");

/* middleware  */
app.use(cors());
app.use(express.json());

// set the view engine to ejs
app.set("view engine", "ejs");

/* here will be all the imports routes */
const testRoute = require("./routes/testRoute");
/* here will be the all the routes */
app.get("/", (req, res) => {
    res.render("index");
});

/* Here is the User Routes */

app.use("/test", testRoute);

// 404 response
app.all("*", (req, res) => {
    res.status(404).send({
        message: "Not Found",
        status: 404,
    });
}
);


module.exports = app;
