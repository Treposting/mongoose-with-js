const { Schema, default: mongoose } = require("mongoose");
const validator = require("validator");
const testSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please provide a valid email"],
    },
});

const TestData = mongoose.model("Test", testSchema);

module.exports = TestData;