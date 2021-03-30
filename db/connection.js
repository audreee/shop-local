const { Pool } = require('pg');

const pool = new Pool({
  user: 'audreesteinberg',
  host: 'localhost',
  database: 'mvp',
  password: '',
  port: 5432,
});

pool.connect((err, done) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('postgresSQL is connected');
});

module.exports = pool;
