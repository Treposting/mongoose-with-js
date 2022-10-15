> Starter Templpate for Mongooose with Javascript

> Installation and Usage

- Clone the [repo](https://github.com/Treposting/mongoose-with-js)

- Add `.env` file to the root of the project
  - Add `MONGO_URI` to the `.env` file
- Run `npm install`
- Run `npm run dev` to start the server
- Run `npm run start` to start the project

> Features
> Just install the dependencies and you are good to go.

- Make a Model
- Make a Controller
- Make a Route
- Make a Service
- Make a Middleware

Import the route in the `app.js` file. Like,

`const testRoute = require("./routes/testRoute");`

Then Call the route in the `app.js` file. Like,

`app.use("/test", testRoute) `
