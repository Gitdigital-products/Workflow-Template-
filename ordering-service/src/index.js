const express = require('express');
const axios = require('axios');
const app = express();

app.get('/orders', async (req, res) => {
  try {
    const inventory = await axios.get(`${process.env.INVENTORY_API}/items`);
    res.json({ orders: [], inventory: inventory.data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log('Ordering Service running on 3000'));