const router = require('express').Router();

module.exports = (db) => {
  router.get('/users', (req, res) => {
    db.query(
      `SELECT * FROM users`
    ).then(() => {res.json(res)})
  })
}