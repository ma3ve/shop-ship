import { Response, Request } from 'express';
import Customer from '../models/Customer';
import HttpException from 'utils/HttpExceptions';

export const getCustomers = async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1;
  const count = Number(req.query.count) || 20;
  const { name, city } = req.query;
  console.log(city);
  const query: any = {};
  if (name) query.name = { $regex: '^' + name };
  if (city) query.city = { $regex: '^' + city };
  const customers = await Customer.find(query)
    .limit(count * 2)
    .skip((page - 1) * count)
    .exec();
  const total = await Customer.countDocuments();
  res.json({
    data: customers,
    total,
    page,
  });
};

export const createCustomer = async (req: Request, res: Response) => {
  const customer = await Customer.create(req.body);
  res.send(customer);
};

export const getCustomer = async (req: Request, res: Response) => {
  const { customerId } = req.params;
  const customer = await Customer.findById(customerId);
  res.send(customer);
};
