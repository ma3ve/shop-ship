import { Response, Request } from 'express';
import Shipping from '../models/Shipping';

export const getShippings = async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1;
  const count = Number(req.query.count) || 20;
  const { city } = req.query;
  const query: any = {};
  if (city) query.city = { $regex: '^' + city };
  const shippings = await Shipping.find(query)
    .limit(count * 2)
    .skip((page - 1) * count)
    .populate('customer')
    .populate('purchase')
    .exec();
  const total = await Shipping.countDocuments();
  res.json({
    data: shippings,
    total,
    page,
  });
};

export const createShipping = async (req: Request, res: Response) => {
  const purchase = await Shipping.create(req.body);
  res.send(purchase);
};

export const getShipping = async (req: Request, res: Response) => {
  const { shippingId } = req.params;
  const customer = await Shipping.findById(shippingId)
    .populate('customer')
    .exec();
  res.send(customer);
};
