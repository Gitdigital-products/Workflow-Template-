const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', async (req, res) => {
  try {
    const orders = await axios.get(`${process.env.ORDERING_API}/orders`);
    res.json({ dashboard: orders.data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log('Dashboard running on 3000'));