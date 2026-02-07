const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    db.run(`CREATE TABLE IF NOT EXISTS projects (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            username TEXT,
            image_url TEXT
        )`, (err) => {
      if (err) {
        console.error("Error creating table:", err);
      } else {
        // Insert some sample data if the table is empty
        db.get("SELECT count(*) as count FROM projects", (err, row) => {
          if (row.count === 0) {
            const insert = 'INSERT INTO projects (title, username, image_url) VALUES (?,?,?)';
            db.run(insert, ["NetHack Clone", "dev_wizard", "https://placehold.co/600x400"]);
            db.run(insert, ["AI Chatbot", "tech_guru", "https://placehold.co/600x400"]);
            console.log("Inserted sample data");
          }
        });
      }
    });
  }
});

// API Endpoint to get projects
app.get('/api/projects', (req, res) => {
  db.all("SELECT * FROM projects", [], (err, rows) => {
    if (err) {
      res.status(400).json({"error":err.message});
      return;
    }
    res.json({
      "message": "success",
      "data": rows
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});