const express = require('express'),
  router = express.Router();

router.get('/list', function(req, res) {
  let sql = `SELECT * FROM addresses`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Address lists retrieved successfully"
    })
  })
});


module.exports = router;