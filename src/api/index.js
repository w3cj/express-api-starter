const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  console.log(req.body);
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});


module.exports = router;
