import express, { application } from 'express';
import cors from 'cors';
import clientRoutes from './routes/clients';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/clients', clientRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});