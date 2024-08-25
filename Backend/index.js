const express = require('express')
const mongoose = require("mongoose")
const authroute = require("./routes/api/auth")
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose.connect("mongodb://127.0.0.1:27017/netflix_clone")
  .then(() => { console.log("connected to DB", mongoose.connection.name) })
  .catch((err) => { console.log(err) })

app.use(express.json())
app.use("/api/auth", authroute)
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})