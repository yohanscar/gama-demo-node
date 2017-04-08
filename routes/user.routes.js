
module.exports = function (app,_db){

app.get('/apiUser', function (req, res) {
  res.send('Hello World!')
  _db.collection('teste').find().toArray(function (err, result) {
    if (err) throw err
    console.log(result)
  })
})


app.post('/apiUser', function (req, res) {

    try {
        var collection = _db.collection('teste')

        collection.save(req.body)
            .then(function (result) {
                res.send(result)
            })
            .catch(function (error) {
                console.log(error)
                res.status(500).send(error)
            })

    } catch (error) {
        res.status(500).send(error)

    }
 })
}