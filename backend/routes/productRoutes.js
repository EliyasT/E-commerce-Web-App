import express from 'express';
import { isAuth, isAdmin } from '../utils.js';
import {
  deleteProduct,
  getAllProduct,
  getProductBycategory,
  getProductById,
  getProductBySlug,
  postProduct,
  productAdmin,
  productReviews,
  searchProduct,
  updateProduct,
} from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get('/', getAllProduct);
productRouter.get('/categories', getProductBycategory);
productRouter.get('/search', searchProduct);
productRouter.get('/admin', isAuth, isAdmin, productAdmin);
productRouter.get('/slug/:slug', getProductBySlug);
productRouter.get('/:id', getProductById);
productRouter.post('/', isAuth, isAdmin, postProduct);
productRouter.put('/:id', isAuth, isAdmin, updateProduct);
productRouter.delete('/:id', isAuth, isAdmin, deleteProduct);
productRouter.post('/:id/reviews', isAuth, productReviews);

export default productRouter;
