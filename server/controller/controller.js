const db = require('../../db/models/models.js');

module.exports = {
  findBusinesses: (req, res) => {
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
  },

  addBusiness: (req, res) => {
    let info = [req.body.name, req.body.category, req.body.phone, req.body.website, req.body.address_line_1, req.body.address_line_2, req.body.city, req.body.state, req.body.zip, req.body.community];

    console.log(info);

    db.insertBusiness(info, (err, results) => {
      if (err) {
        console.error(err);
        res.sendStatus(400);
      } else {
        res.status(201).send('Thank you for your submission')
      }
    })
  }
}