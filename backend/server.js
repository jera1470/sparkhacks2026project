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
    
    // Drop the old tables if they exist (to update schema)
    db.run(`DROP TABLE IF EXISTS projects`, (err) => {
      if (err) {
        console.error("Error dropping projects table:", err);
      }
    });
    
    db.run(`DROP TABLE IF EXISTS users`, (err) => {
      if (err) {
        console.error("Error dropping users table:", err);
      }
    });
    
    // Create projects table with all required fields
    db.run(`CREATE TABLE IF NOT EXISTS projects (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            category TEXT,
            username TEXT,
            title TEXT,
            description TEXT,
            image_url TEXT
        )`, (err) => {
      if (err) {
        console.error("Error creating projects table:", err);
      } else {
        console.log("Projects table created successfully");
        
        
        const insert = 'INSERT INTO projects (category, username, title, description, image_url) VALUES (?,?,?,?,?)';
        
        // Mechanical Engineering Projects
        db.run(insert, [
          "Mechanical Engineering",
          "Alex A.",
          "Food Delivery Bot",
          "Hello, I'm Alex! I am looking for someone to help me design a food delivery robot that can help deliver food to people living in areas that are not easily accessible.",
          "https://placehold.co/600x400/FFA500/white?text=Food+Delivery+Bot"
        ]);
        
        db.run(insert, [
          "Mechanical Engineering",
          "Sarah Smith",
          "Drone Design",
          "My name is Sarah and I am a mechanical engineer currently working on a drone project, and I needed a hand. Join my team if interested!",
          "https://placehold.co/600x400/4169E1/white?text=Drone+Design"
        ]);
        
        db.run(insert, [
          "Mechanical Engineering",
          "Keith Jones",
          "New 3D Printer Project",
          "My name is Keith and I am a PhD software engineering student at MIT. I am designing a 3D printer program but I need someone with experience in the mechanical aspect of it to help it come to life.",
          "https://placehold.co/600x400/32CD32/white?text=3D+Printer"
        ]);
        
        // Computer Science Projects
        db.run(insert, [
          "Computer Science",
          "Richard Gomez",
          "Multiplayer Game Project",
          "I am developing a FPS multiplayer game and I was wondering if anybody wanted to join me on this? Thanks!",
          "https://placehold.co/600x400/FF4500/white?text=FPS+Game"
        ]);
        
        db.run(insert, [
          "Computer Science",
          "Lola B.",
          "Back End Help Needed",
          "Hey there, I'm Lola! I am working on the front end of my project, but I needed someone to help implement the back end. I already have a plan for the structure. Any takers?",
          "https://placehold.co/600x400/9370DB/white?text=Back+End+Project"
        ]);
        
        db.run(insert, [
          "Computer Science",
          "Josh Lee",
          "AI Application",
          "Anyone with experience in AI? I'm building an app that uses AI but I don't know how to implement it. Looking for a project partner.",
          "https://placehold.co/600x400/FF1493/white?text=AI+App"
        ]);
        
        // Journalism Projects
        db.run(insert, [
          "Journalism",
          "Cole Baker",
          "The Environmental Impact of Aviation",
          "I am a journalist looking for someone to collaborate with to investigate and report on the environmental impacts of aviation. Send me a join request if you are interested.",
          "https://placehold.co/600x400/1E90FF/white?text=Aviation+Impact"
        ]);
        
        db.run(insert, [
          "Journalism",
          "Mary Ellis",
          "Instagram article",
          "I just finished analyzing a dataset on the most popular type of content on Instagram by country. Is there anyone with experience who can help me write an article based on these findings?",
          "https://placehold.co/600x400/FF69B4/white?text=Instagram+Article"
        ]);
        
        db.run(insert, [
          "Journalism",
          "Willie I.",
          "NFL Podcast",
          "Hi, I'm Willie! I am creating a podcast covering all things NFL, but I need 2 other people to join me. Send me a request if you're interested.",
          "https://placehold.co/600x400/228B22/white?text=NFL+Podcast"
        ]);



        
        // Electrical Engineering Projects
        db.run(insert, [
          "Electrical Engineering",
          "Matt Freeman",
          "Automatic Watering Sensor Project",
          "I am a sophomore at UIC and wanted to find someone to work with and build an automatic watering system for watering plants.",
          "https://placehold.co/600x400/00CED1/white?text=Watering+Sensor"
        ], (err) => {
          if (err) {
            console.error("Error inserting project data:", err);
          } else {
            console.log("All project sample data inserted successfully");
          }
        });
      }
    });




    
    // Create project_members table
    // db.run(`CREATE TABLE IF NOT EXISTS project_members (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         project_id INTEGER NOT NULL,
    //         user_id INTEGER NOT NULL,
    //         FOREIGN KEY (project_id) REFERENCES projects(id),
    //         FOREIGN KEY (user_id) REFERENCES users(id)
    //     )`, (err) => {
    //   if (err) {
    //     console.error("Error creating project_members table:", err);
    //   } else {
    //     console.log("Project members table created successfully");
    //   }
    // });



    // Create users table
    db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            real_name TEXT NOT NULL
        )`, (err) => {
      if (err) {
        console.error("Error creating users table:", err);
      } else {
        console.log("Users table created successfully");
        
        // Insert sample users
        const insertUser = 'INSERT INTO users (username, real_name) VALUES (?,?)';
        
        db.run(insertUser, ["dev_wizard", "John Developer"]);
        db.run(insertUser, ["tech_guru", "Sarah Tech"]);
        db.run(insertUser, ["Alex A.", "Alex Anderson"]);
        db.run(insertUser, ["Sarah Smith", "Sarah Smith"]);
        db.run(insertUser, ["Keith Jones", "Keith Jones"]);
        db.run(insertUser, ["Richard Gomez", "Richard Gomez"]);
        db.run(insertUser, ["Lola B.", "Lola Brown"]);
        db.run(insertUser, ["Josh Lee", "Josh Lee"]);
        db.run(insertUser, ["Cole Baker", "Cole Baker"]);
        db.run(insertUser, ["Mary Ellis", "Mary Ellis"]);
        db.run(insertUser, ["Willie I.", "Willie Johnson"]);
        db.run(insertUser, ["Matt Freeman", "Matt Freeman"], (err) => {
          if (err) {
            console.error("Error inserting user data:", err);
          } else {
            console.log("All user sample data inserted successfully");
          }
        });
      }
    });
  }
});

// API Endpoint to get all projects
app.get('/api/projects', (req, res) => {
  db.all("SELECT * FROM projects", [], (err, rows) => {
    if (err) {
      res.status(400).json({"error": err.message});
      return;
    }
    res.json({
      "message": "success",
      "data": rows
    });
  });
});

// API Endpoint to get projects by category
app.get('/api/projects/category/:category', (req, res) => {
  const category = req.params.category;
  db.all("SELECT * FROM projects WHERE category = ?", [category], (err, rows) => {
    if (err) {
      res.status(400).json({"error": err.message});
      return;
    }
    res.json({
      "message": "success",
      "data": rows
    });
  });
});

// API Endpoint to get a single project by ID
app.get('/api/projects/:id', (req, res) => {
  const id = req.params.id;
  db.get("SELECT * FROM projects WHERE id = ?", [id], (err, row) => {
    if (err) {
      res.status(400).json({"error": err.message});
      return;
    }
    res.json({
      "message": "success",
      "data": row
    });
  });
});

// API Endpoint to add a new project
app.post('/api/projects', (req, res) => {
  const { category, username, title, description, image_url } = req.body;
  const insert = 'INSERT INTO projects (category, username, title, description, image_url) VALUES (?,?,?,?,?)';
  
  db.run(insert, [category, username, title, description, image_url], function(err) {
    if (err) {
      res.status(400).json({"error": err.message});
      return;
    }
    res.json({
      "message": "success",
      "data": {
        id: this.lastID,
        category,
        username,
        title,
        description,
        image_url
      }
    });
  });
});

// API Endpoint to update a project
app.put('/api/projects/:id', (req, res) => {
  const id = req.params.id;
  const { category, username, title, description, image_url } = req.body;
  const update = 'UPDATE projects SET category = ?, username = ?, title = ?, description = ?, image_url = ? WHERE id = ?';
  
  db.run(update, [category, username, title, description, image_url, id], function(err) {
    if (err) {
      res.status(400).json({"error": err.message});
      return;
    }
    res.json({
      "message": "success",
      "data": {
        id,
        category,
        username,
        title,
        description,
        image_url
      },
      "changes": this.changes
    });
  });
});

// API Endpoint to delete a project
app.delete('/api/projects/:id', (req, res) => {
  const id = req.params.id;
  db.run('DELETE FROM projects WHERE id = ?', [id], function(err) {
    if (err) {
      res.status(400).json({"error": err.message});
      return;
    }
    res.json({
      "message": "success",
      "changes": this.changes
    });
  });
});




// the USERS API ENDPOINTS 

// API Endpoint to get all users
app.get('/api/users', (req, res) => {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) {
      res.status(400).json({"error": err.message});
      return;
    }
    res.json({
      "message": "success",
      "data": rows
    });
  });
});


// API Endpoint to get a single user by ID
app.get('/api/users/:id', (req, res) => {
  const id = req.params.id;
  db.get("SELECT * FROM users WHERE id = ?", [id], (err, row) => {
    if (err) {
      res.status(400).json({"error": err.message});
      return;
    }
    res.json({
      "message": "success",
      "data": row
    });
  });
});



// API Endpoint to get a user by username
app.get('/api/users/username/:username', (req, res) => {
  const username = req.params.username;
  db.get("SELECT * FROM users WHERE username = ?", [username], (err, row) => {
    if (err) {
      res.status(400).json({"error": err.message});
      return;
    }
    res.json({
      "message": "success",
      "data": row
    });
  });
});



// API Endpoint to add a new user
app.post('/api/users', (req, res) => {
  const { username, real_name } = req.body;
  const insert = 'INSERT INTO users (username, real_name) VALUES (?,?)';
  
  db.run(insert, [username, real_name], function(err) {
    if (err) {
      res.status(400).json({"error": err.message});
      return;
    }
    res.json({
      "message": "success",
      "data": {
        id: this.lastID,
        username,
        real_name
      }
    });
  });
});



// API Endpoint to update a user
app.put('/api/users/:id', (req, res) => {
  const id = req.params.id;
  const { username, real_name } = req.body;
  const update = 'UPDATE users SET username = ?, real_name = ? WHERE id = ?';
  
  db.run(update, [username, real_name, id], function(err) {
    if (err) {
      res.status(400).json({"error": err.message});
      return;
    }
    res.json({
      "message": "success",
      "data": {
        id,
        username,
        real_name
      },
      "changes": this.changes
    });
  });
});



// API Endpoint to delete a user
app.delete('/api/users/:id', (req, res) => {
  const id = req.params.id;
  db.run('DELETE FROM users WHERE id = ?', [id], function(err) {
    if (err) {
      res.status(400).json({"error": err.message});
      return;
    }
    res.json({
      "message": "success",
      "changes": this.changes
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});