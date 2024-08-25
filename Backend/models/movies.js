const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    price: { type: Number },
    image: { type: String },
    video: { type: String },
    category: { type: String },
    year: { type: string },
    isSeries: { type: Boolean, default: false }
})

module.exports = mongoose.model("Movies", movieSchema)