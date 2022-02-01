import HttpException from './HttpExceptions';
import joi, { ObjectSchema } from 'joi';
import { Request, Response, NextFunction } from 'express';

const Validate = (
  schema: ObjectSchema
): ((req: Request, res: Response, next: NextFunction) => void) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.validate(req.body);
    console.log(result);
    if (result.error) {
      next(new HttpException(result.error.message.split(`\"`).join(''), 400));
    }
    next();
  };
};

export default Validate;
