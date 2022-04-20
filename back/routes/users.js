const router = require('express').Router();

module.exports = (db) => {
  router.get('/users', (req, res) => {
    db.query(
      `SELECT * FROM users;`
    )
      .then((response) => 

      {  res.json(response.rows) })
      .catch((err) => { console.log('There has been an ERROR: ', err) });
  
  });
    return router;
}

