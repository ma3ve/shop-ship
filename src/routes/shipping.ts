import {
  createShipping,
  getShipping,
  getShippings,
} from '../controllers/Shipping';
import { Router } from 'express';

import Validate from '../utils/validateMiddleware';
import { shippingJoi } from '../models/Shipping';
const shippingRouter = Router();

shippingRouter.get('/', getShippings);
shippingRouter.post('/', Validate(shippingJoi), createShipping);
shippingRouter.get('/:shippingId', getShipping);

export default shippingRouter;
