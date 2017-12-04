const { Client, Pool } = require('pg');

// https://node-postgres.com/features/types

async function start() {

  const pool = new Pool({
    user: 'vlsuser',
    host: '127.0.01',
    database: 'vlsdb',
    password: '123456789',
    port: 5432,
  });

  let res1 = await pool.query('SELECT NOW()');

  console.log(res1.now);

  await pool.query('INSERT INTO chunks(data) VALUES ($1)', [{name: "Paint house", tags: ["Improvements", "Office"], finished: true}]);

  let { rows } = await pool.query('SELECT * FROM chunks');

  console.log(rows);
}


start();
