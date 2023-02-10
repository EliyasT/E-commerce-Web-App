import express from 'express';
import data from '../data.js';
import Product from '../models/Product.js';
import User from '../models/User.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createProducts = await Product.insertMany(data.products);
  res.send({ createProducts });
  await User.remove({});
  const createUsers = await User.insertMany(data.users);
  res.send({ createUsers });
});

export default seedRouter;
