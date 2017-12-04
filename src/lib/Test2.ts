const { Client, Pool } = require('pg');

async function start() {

  const pool = new Pool({
    user: 'vlsuser',
    host: '127.0.01',
    database: 'vlsdb',
    password: '123456789',
    port: 5432,
  });

  pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res);
    pool.end();
  });
}


start();
