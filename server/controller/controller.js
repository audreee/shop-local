const db = require('../../db/models/models.js');

module.exports = {
  findBusinesses: (req, res) => {
    db.getBusinesses(req.query.term, (err, results) => {
      if (err) {
        console.error(err);
        res.sendStatus(400);
      } else {
        res.status(200).send(results.rows);
      }
    })
  }
}