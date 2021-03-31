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
  }
}

// let queryString = format(`SELECT DISTINCT * FROM coffee_books cb WHERE (cb.*)::text LIKE '%%%s%%'`, term)

