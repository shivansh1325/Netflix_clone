const express = require('express')
const mongoose = require("mongoose")
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose.connect("mongodb://127.0.0.1:27017/netflix_clone")
  .then(() => { console.log("connected to DB",) })
  .catch((err) => { console.log(err) })


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})