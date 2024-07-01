const express = require('express'),
  router = express.Router();

router.get('/list', function (req, res) {
  let sql = `SELECT * FROM invoices`;
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Invoices lists retrieved successfully"
    })
  })
});


router.patch('/update/:id?', function (req, res) {
  let sql = "UPDATE invoices"
  
  const invoiceId=req.params.id||null
  const keys=["name","date","paid","checked","price"]
  if(Object.keys(req.body).length>0){
    sql += " SET "
  }
for(let i=0;i<keys.length;i++){
  if(req.body.hasOwnProperty(keys[i])) sql += `${keys[i]}="${req.body[keys[i]]}" ,`
}
sql=sql.substring(0,sql.length-1)
sql += ` WHERE id=${invoiceId} `

db.query(sql, function (err, data, fields) {
  if (err) throw err;
  res.json({
    status: 200,
    data,
    message: "Invoice updated"
  })
})

  
  
})




module.exports = router;