const express= require('express');

var router = express.Router({mergeParams: true});
const db = {
  conditions: require("../data/conditions")
}

/* GET conditions listing. */
router.get('/', function(req, res) {
  res.send(db.conditions);
});

module.exports = router;