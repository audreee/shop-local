const db = require('../../db/models/models.js');

module.exports = {
  findBusinesses: (req, res) => {
    console.log('query params', req.query.terms)
    db.getBusinesses(req.query.terms, (err, results) => {
      if (err) {
        console.error(err);
        res.sendStatus(400);
      } else {
        res.status(200).send(results.rows);
      }
    })
  },

  findAllBusinesses: (req, res) => {
    db.getAllBusinesses((err, results) => {
      if (err) {
        console.error(err);
        res.sendStatus(400);
      } else {
        res.status(200).send(results.rows)
      }
    })
  }
}