import express, { application, Response } from 'express';
import path from 'path';
const app = express();

app.get('/api', (_, res: Response) => res.send('server is up'));

console.log(__dirname);
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.use('/', express.static(path.join(__dirname, 'client')));

app.listen(5000, () => console.log('server is running on port 5000'));
