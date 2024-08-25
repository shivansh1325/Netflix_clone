const mongoose = require("mongoose")

const listschema = new mongoose.Schema(
    {
        title: { type: String, require: true },
        type: { type: string },
        gener: { type: string },
        content: { type: Array }
    })


module.export = mongoose.model("List", listschema)