const { Schema, default: mongoose } = require("mongoose");

const testSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    }
});

const TestData = mongoose.model("Test", testSchema);

module.exports = TestData;