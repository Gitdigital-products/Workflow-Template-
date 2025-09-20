const axios = require('axios');

test('Ordering service returns orders with inventory', async () => {
  const res = await axios.get('http://localhost:3001/orders');
  expect(res.status).toBe(200);
  expect(res.data.inventory).toBeDefined();
});

test('Dashboard service aggregates data', async () => {
  const res = await axios.get('http://localhost:3000/');
  expect(res.status).toBe(200);
  expect(res.data.dashboard).toBeDefined();
});