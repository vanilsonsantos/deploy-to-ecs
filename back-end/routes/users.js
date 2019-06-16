var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    'users': [
      {
        'name': 'Developer'
      },
      {
        'name': 'Client'
      }
    ]
  });
});

module.exports = router;
