const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    actor: {
        type: String,
        default: "Not specified"
    },
})

const Movie = mongoose.model("films", movieSchema);

module.exports = Movie