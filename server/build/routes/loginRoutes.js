"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403).send('Not allowed');
}
const router = (0, express_1.Router)();
exports.router = router;
router.get('/login', (req, res) => {
    res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
  `);
});
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === 'a@a.com' && password === 'añuña') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
    }
});
router.get('/', (req, res) => {
    if (req.session && req.session.loggedIn) {
        res.status(200).send(`
      <div>
        <h1>Logged in</h2>
        <a href='/logout'>Log out</a>
      </div>
    `);
    }
    else {
        res.status(200).send(`
      <div>
        <h1>You are not Logged in</h2>
        <a href='/login'>Log in</a>
      </div>
    `);
    }
});
router.get('/logout', (req, res) => {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, (req, res) => {
    res.send('Protected route');
});
