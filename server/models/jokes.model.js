const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
    { 
    setup: {
    type: String,
    minlength: [10, "Must be at least 10 characters long"], //VALIDACIÓN
    },
    punchline: {
    type: String,
    minlength: [3, "Must be at least 3 characters long"], //VALIDACIÓN
    },
    },
    { timestamps: true }
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;