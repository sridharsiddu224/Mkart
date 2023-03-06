import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';


const app = express();

mongoose.connect(`mongodb://0.0.0.0:27017/mkart`,
  { useNewUrlParser: true})
  .then((res) => console.log(data.users))
  .catch(error => console.error(error));

app.get('/app/products/:id', (req, res) => {
  const product = data.products.find((x) => x.id === req.params.id)
  if (product) {
    console.log(product);
    res.send(product)
  } else {
    res.status(404).send({ message: "Product Not Found" })
  }
});

app.get('/app/products', (req, res) => {
  res.send(data.products);
});

app.get('/app/users',userRouter)
app.get('/app/users', (req, res) => {
  res.send(data.users);
});

app.get('/', (req, res) => {
  res.send('server found')
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

// app.listen(5000, () => {
//   console.log(`serve at http://localhost:5000/app/products`);
// });

const port = process.env.PORT || 27017 ;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}/app/users`);
});
