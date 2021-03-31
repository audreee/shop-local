const format = require('pg-format');
const db = require('../connection.js');

module.exports = {
  getBusinesses: (term, callback) => {
    let queryString = format(`SELECT DISTINCT * FROM coffee_books cb WHERE (cb.*)::text LIKE '%%%s%%'`, term)
    db.query(queryString, callback)
  }
}

// SELECT c.* FROM coffee c WHERE (c.*)::text LIKE '%somestring%'

