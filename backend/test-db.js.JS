const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: '107.170.46.212',  // or '127.0.0.1' if local
  user: 'root',
  password: '1234',
  database: 'finalproj'
});

async function test() {
  try {
    const [rows] = await pool.query('SELECT * FROM chart_data LIMIT 5');
    console.log('DB connection successful. Sample rows:');
    console.log(rows);
    process.exit(0);
  } catch (err) {
    console.error('DB connection failed:', err);
    process.exit(1);
  }
}

test();
