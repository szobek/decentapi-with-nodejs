const express = require('express'),
  router = express.Router();

router.get('/list', function(req, res) {
  let sql = `SELECT * FROM invoices`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Invoices lists retrieved successfully"
    })
  })
});


module.exports = router;