const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors()); 

const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'replace_this';

// Hardcoded login
const HARDCODED_USER = { username: 'ameer', password: 'ameer' };

// MySQL connection
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',       // replace if different
  password: '1234',       // your MySQL password
  database: 'finalproj',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// JWT middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Login endpoint
app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;
  if (username === HARDCODED_USER.username && password === HARDCODED_USER.password) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '2h' });
    return res.json({ token });
  }
  return res.status(401).json({ error: 'Invalid credentials' });
});

// Ping endpoint
app.get('/api/ping', (req, res) => res.json({ pong: true }));

// Chart endpoints
app.get('/api/chart/:chartName', authenticateToken, async (req, res) => {
  const chartName = req.params.chartName;
  try {
    const [rows] = await pool.query(
      'SELECT label, value FROM chart_data WHERE chart_name = ?',
      [chartName]
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

const path = require('path');

// Serve React build
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => console.log(`Backend running on port ${PORT}`));
