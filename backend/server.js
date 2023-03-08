import express from 'express';
import mongoose from 'mongoose'
import data from './data.js';
import userRouter from './routers/userRouter.js';

const app = express();
mongoose.connect( process.env.MONGODB_URL || 'mongodb://0.0.0.0:27017/mkart',{
  useNewUrlParser:true,
  useUnifiedTopology:true,
});

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

app.use('/app/users', userRouter);
app.get('/', (req, res) => {
  res.send('server found')
});

const PORT = process.env.PORT || 8081; // Change this to the desired port number

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
}); 

// const port = process.env.PORT || 5000;0
// app.listen(port, () => {
//   console.log(`serve at http://localhost:${port}`);
// });