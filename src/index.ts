import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import config from './config';
import inventoryRouter from './inventory/routes';
import { connectDB } from './db';

const app = express();
const port = Number(config.port);

connectDB();

app.use(bodyParser.json());

app.use('/api/inventory', inventoryRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to DAXM Detail Admin API');
  });


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


