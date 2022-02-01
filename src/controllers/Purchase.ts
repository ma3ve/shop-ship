import { Response, Request, NextFunction } from 'express';
import HttpException from '../utils/HttpExceptions';
import Purchase from '../models/Purchase';

export const getPurchases = async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1;
  const count = Number(req.query.count) || 20;
  const { customer } = req.query;
  const query: any = {};
  if (customer) query.customer = customer;
  const purchases = await Purchase.find(query)
    .limit(count * 2)
    .skip((page - 1) * count)
    .populate('customer')
    .exec();
  const total = await Purchase.countDocuments();
  res.json({
    data: purchases,
    total,
    page,
  });
};

export const createPurchase = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.price > req.body.mrp)
    return next(new HttpException('price cant be greater than mrp', 400));
  const purchase = await Purchase.create(req.body);

  res.send(purchase);
};

export const getPurchase = async (req: Request, res: Response) => {
  const { purchaseId } = req.params;
  const customer = await Purchase.findById(purchaseId)
    .populate('customer')
    .exec();
  res.send(customer);
};
