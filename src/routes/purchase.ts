import {
  createPurchase,
  getPurchase,
  getPurchases,
} from '../controllers/Purchase';
import { Router } from 'express';
import { purchaseJoi } from '../models/Purchase';

import Validate from '../utils/validateMiddleware';
const purchaseRouter = Router();

purchaseRouter.get('/', getPurchases);
purchaseRouter.post('/', Validate(purchaseJoi), createPurchase);
purchaseRouter.get('/:purchaseId', getPurchase);

export default purchaseRouter;
