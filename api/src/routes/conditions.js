const express= require('express');

const router = express.Router({mergeParams: true});
const db = {
  conditions: require("../data/conditions")
}
let tempDb = db.conditions;

/* GET conditions listing. */
router.get('/', function(req, res) {
  res.status(200).json(db.conditions);
});

/* Post new condition into temp object. */
router.post("/", function  (req, res) {
  if (!req.body.label) {
    res.status(400).json({ error: 'invalid request: Lable for the condition'});
    return;
  }

  const condition = {
    snippet: req.body.snippet,
    label: req.body.label,
    synonyms: req.body.synonyms,
    keywords: req.body.keywords,
    image: req.body.image
  };
  tempDb.conditions.push(condition)
  res.send(tempDb);
});

module.exports = router;