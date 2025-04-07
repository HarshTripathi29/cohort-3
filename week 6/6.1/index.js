const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const JWT_SECRET = "harshrandomtoken"; // Secret key used for signing JWT tokens

app.use(express.json()); // Middleware to parse JSON bodies

const users = []; // In-memory user storage (for demo/testing purposes)

// ===================== SIGN UP =====================
app.post("/signup", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    // Save the user to the array
    users.push({
        username: username,
        password: password,
    });

    res.json({
        message: "you are signed in "
    });
});

// ===================== SIGN IN =====================
app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    // Search for a user that matches the provided username and password
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
            foundUser = users[i];
        }
    }

    if (foundUser) {
        // If user found, generate JWT token
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);

        foundUser.token = token; // Optionally store the token in user (not necessary unless tracking sessions)

        res.json({
            token: token
        });
    } else {
        // Invalid credentials
        res.status(403).send({
            message: "Invalid username or password",
        });
    }
});

// ===================== GET CURRENT USER =====================
app.get("/me", function (req, res) {
    const token = req.headers.authorization; // JWT token should be sent in the Authorization header

    try {
        // Verify the token using the secret
        const userDetails = jwt.verify(token, JWT_SECRET);
        const username = userDetails.username;

        let foundUser = null;

        // Find the user from our array
        for (let i = 0; i < users.length; i++) {
            if (users[i].username == username) {
                foundUser = users[i];
            }
        }

        if (foundUser) {
            // Return user info if token is valid
            res.json({
                username: foundUser.username,
                password: foundUser.password // ⚠️ In real apps, never send passwords back!
            });
        } else {
            res.json({
                message: "token invalid",
            });
        }

    } catch (err) {
        // Token is invalid or expired
        res.status(401).json({
            message: "Invalid or expired token"
        });
    }
});

// ===================== SERVER LISTEN =====================
app.listen(5000, function () {
    console.log("the app is running on 5000");
});
