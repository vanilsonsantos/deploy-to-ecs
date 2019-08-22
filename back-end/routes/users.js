var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    'users': [
      {
        'name': 'Developer number 4'
      },
      {
        'name': 'Client number 4'
      }
    ]
  });
});

module.exports = router;
