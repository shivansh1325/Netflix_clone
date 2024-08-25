const mongoose = require("mongoose")

const schema = mongoose.Schema({ user_name: String, email: String, password: String })
const User = mongoose.model('User', schema);

module.exports = mongoose.model("user", user)