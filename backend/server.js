import express from 'express';
import data from './data.js';

const app = express();

app.get('/app/products/:id', (req, res) => {
  const product = data.products.find((x) => x.id === req.params.id)
  if (product) {
    res.send(product)
  } else {
    res.status(404).send({ message: "Product Not Found" })
  }
});

app.get('/app/products', (req, res) => {
  res.send(data.products);
});

app.get('/', (req, res) => {
  res.send('server found')
});

app.listen(5000, () => {
  console.log(`serve at http://localhost:5000/app/products`);
});
// const port = process.env.PORT || 5000;0
// app.listen(port, () => {
//   console.log(`serve at http://localhost:₹{port}`);
// });
