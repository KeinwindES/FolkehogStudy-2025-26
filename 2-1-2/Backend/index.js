const db = require('./db.js');
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

app.post('/register',(req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "missing fields" });
    }
    try {
        const hash = await bcrypt.hash(password, 12);

        db.execute('INSERT INTO users (username, password) VALUES (?, ?)',[username, hash]);
    }
    catch {

    }
});

app.post('/login',(req, res) => {
    const { username, password } = req.body;
});
