const express = require('express'),
  router = express.Router();

router.get('/list', function (req, res) {
  let sql = `SELECT * FROM addresses`;
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Address lists retrieved successfully"
    })
  })
});








router.post('/create', function (req, res) {
  let sql = "INSERT INTO addresses values"

  // kulcsok
  const keys = [
    "name",
    "postal_code",
    "address",
    "phone",
    "city",
    "same_data",
    "measuring_point"
  ]
  sql += " (null,"

  // ellenőrzi a kulcsokat
  for (let i = 0; i < keys.length; i++) {
    if (req.body.hasOwnProperty(keys[i])) sql += `"${req.body[keys[i]]}",`
  }
  sql += " null,null)"

  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Address created"
    })
  })



})





router.patch('/update/:id?', function (req, res) {
  let sql = "UPDATE addresses"

  const invoiceId = req.params.id || null

  // kulcsok
  const keys = ["name", "postal_code", "address", "phone", "city", "same_data"]

  // ha a req.body nem üres
  if (Object.keys(req.body).length > 0) {
    sql += " SET "
  }

  // ellenőrzi a kulcsokat
  for (let i = 0; i < keys.length; i++) {
    if (req.body.hasOwnProperty(keys[i])) sql += `${keys[i]}="${req.body[keys[i]]}" ,`
  }

  // a "," levágja a végéről
  sql = sql.substring(0, sql.length - 1)

  sql += ` WHERE id=${invoiceId} `

  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Address updated"
    })
  })



})



module.exports = router;