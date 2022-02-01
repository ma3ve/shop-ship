import {
  createCustomer,
  getCustomer,
  getCustomers,
} from '../controllers/Customer';
import { Router } from 'express';
import { CustomerJoi } from '../models/Customer';

import Validate from '../utils/validateMiddleware';
const customerRouter = Router();

customerRouter.get('/', getCustomers);
customerRouter.post('/', Validate(CustomerJoi), createCustomer);
customerRouter.get('/:customerId', getCustomer);

export default customerRouter;
