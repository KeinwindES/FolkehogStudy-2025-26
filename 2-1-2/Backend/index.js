const db = require('./db');
const session = require('./session');
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


app.post('/login',async(req, res) => {
  const { username, password } = req.body;
  console.log(req.body)

    if (!username || !password) {
        return res.status(400).json({ error: "missing fields" });
    }



  try {
    const [users] = await db.execute("SELECT id, password_hash FROM users WHERE username = ?", [username]);
    if (users.length == 0) {
      res.status(401).json({ error: "invalif" })
      return;
    }

    const user = users[0]
    const isSamePassword = await bcrypt.compare(password, user.password_hash);
    if (!isSamePassword) {
      res.status(401).json({ error: "invalid credentials" });
      return;
    }
    const sessionId = session.GenerateSessionId();
    const sessionExpiry = session.GenerateSessionExpiry();

    await db.execute("INSERT INTO sessions (id, user_id, expires_at) VALUES (?, ?, ?)", [sessionId, user.id, sessionExpiry]);
    res.cookie("SessionToken", sessionId, {
      httpOnly: true,
      secure: false,
      sameSite: true,
      expires: sessionExpiry
    });

    res.json({message:"YOU LOGGED IN"})
  }
  catch(err) {
    res.status(500).json({error:"error", eer : err})
  }

});
