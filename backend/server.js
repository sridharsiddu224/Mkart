import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

dotenv.config()

const app = express();
app.use(express.json());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
mongoose.connect( process.env.MONGODB_URL || 'mongodb://0.0.0.0:27017/mkart',{
  useNewUrlParser:true,
  useUnifiedTopology:true,
});

// data come from static
/* app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x)=> x._id == req.params.id)
  res.send(product);
}); */

/* app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/', (req, res) => {
  res.send('Server is ready');
}); */

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 8081;
app.listen(port, () => {
  // console.log(`Serve at http://localhost:${port}`);
});