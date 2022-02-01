import dotenv from 'dotenv';
dotenv.config();
import express, { application, Response } from 'express';
import path from 'path';
import mongoose from 'mongoose';
import customerRouter from './routes/customer';
import bodyParser from 'body-parser';
import errorMiddleware from './utils/errorMiddleware';
import purchaseRouter from './routes/purchase';
import shippingRouter from './routes/shipping';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/customer', customerRouter);
app.use('/api/purchase', purchaseRouter);
app.use('/api/shipping', shippingRouter);

app.get('/api', (_, res: Response) => res.send('server is up'));

app.use('/', express.static(path.join(__dirname, 'client')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.use(errorMiddleware);
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log('connected to database');
  })
  .catch((e) => console.log(e));

app.listen(5000, () => console.log('server is running on port 5000'));
