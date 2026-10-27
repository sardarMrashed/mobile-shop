const express = require('express');
const products = require('./data/products');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => 
    res.send('Welcome to mobile shop Sardar smart!'));

app.get('/products', (req, res) => res.json(products));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on port ${PORT}`);
});
