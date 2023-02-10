import express from 'express';
import { isAuth, isAdmin } from '../utils.js';
import {
  deleteOrder,
  getOrderById,
  getOreders,
  orderDelivery,
  orderMine,
  orderPay,
  orderSummary,
  postOrders,
} from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.get('/', isAuth, getOreders);

orderRouter.post('/', isAuth, postOrders);

orderRouter.get('/summary', isAuth, isAdmin, orderSummary);

orderRouter.get('/mine', isAuth, orderMine);

orderRouter.get('/:id', isAuth, getOrderById);

orderRouter.put('/:id/deliver', isAuth, orderDelivery);

orderRouter.put('/:id/pay', isAuth, orderPay);

orderRouter.delete('/:id', isAuth, isAdmin, deleteOrder);

export default orderRouter;
