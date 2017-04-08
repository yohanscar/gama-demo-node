var express = require('express')
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient
var _db=null

var app = express()
app.use(bodyParser.json()); // for parsing application/json

MongoClient.connect('mongodb://dba:m4st3r@ds149278.mlab.com:49278/demo', function (err, db) {
  if (err) throw err

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})

require('./routes/user.routes')(app, db)
console.log('Banco de dados Conectado!')
})