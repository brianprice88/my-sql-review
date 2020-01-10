const models = require('../database/models.js')

const controllers = {
  getItems: (req, res) => {
    models.readAll((err, result) =>{
      if (err) {res.status(404).send(err)}
      else {res.status(200).send(result)}
  })},
  postItems: (req, res) => {
    models.addItem(req.body, err => {
      if (err) {res.status(400).send(err)}
      else (res.status(201).send('complete'))
    })}
}

module.exports = controllers;