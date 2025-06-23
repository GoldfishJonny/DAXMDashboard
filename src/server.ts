import express from 'express';
import cors from 'cors';
// import clientRoutes from 'src/routes/clients';

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3250;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});