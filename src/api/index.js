const express = require('express');

const products = require('./products');
const brands = require('./brands');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/products', products);
router.use('/brands', brands);

module.exports = router;
