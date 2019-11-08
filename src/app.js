const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('root')
})
 
app.listen(3000)