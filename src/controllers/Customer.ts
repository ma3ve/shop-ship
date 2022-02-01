import { Response, Request } from 'express';
import Customer from '../models/Customer';
import HttpException from 'utils/HttpExceptions';

export const getCustomers = async (req: Request, res: Response) => {
  const { name, city } = req.query;
  console.log(city);
  const query: any = {};
  if (name) query.name = { $regex: '^' + name };
  if (city) query.city = { $regex: '^' + city };
  const customers = await Customer.find(query).exec();
  res.json(customers);
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
