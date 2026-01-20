const db = require('./db');
const express = require('express');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.static("../frontend"));
app.use(express.json());
app.use(cookieParser());

app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});

app.post('/register',async(req, res) => {
  const { username, password } = req.body;
  console.log(req.body)

    if (!username || !password) {
        return res.status(400).json({ error: "missing fields" });
    }
    try {
      const hash = await bcrypt.hash(password, 12);

      await db.execute('INSERT INTO users (username, password_hash) VALUES (?, ?)', [username, hash]);

      res.status(201).json({ message: "User registered successfully" });

    }
    catch (err) {
      console.log(err.code)
      if (err.code = "") {}
      res.status(500).json({ error: "Internal server error" });
    }
});

app.post('/login',(req, res) => {
    const { username, password } = req.body;
});
