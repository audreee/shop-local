const format = require('pg-format');
const db = require('../connection.js');

module.exports = {
  getBusinesses: (term, callback) => {
    let formattedTerms = term.join(' & ')
    console.log('formatted search terms are ', formattedTerms)
    let queryString = format(`SELECT *
    FROM coffee_books
    WHERE to_tsvector(name || ' ' || category || ' ' || website || ' ' || neighborhood || ' ' || community || ' ' ||  address_line_1) @@ to_tsquery('english', '%s')`, formattedTerms)
    db.query(queryString, callback)
  },

  getAllBusinesses: (callback) => {
    db.query('SELECT * FROM coffee_books ORDER BY neighborhood', callback)
  },

  insertBusiness: (businessInfo, callback) => {
    let queryString = format(`INSERT INTO submissions (name, category, phone, website, address_line_1, address_line_2, city, state, zip, community) VALUES (%L, %L, %L, %L, %L, %L, %L, %L, %L, %L)`, businessInfo[0], businessInfo[1], businessInfo[2], businessInfo[3], businessInfo[4], businessInfo[5], businessInfo[6], businessInfo[7], businessInfo[8], businessInfo[9]);
    db.query(queryString, callback)
  }
}

// let queryString = format(`SELECT DISTINCT * FROM coffee_books cb WHERE (cb.*)::text LIKE '%%%s%%'`, term)

