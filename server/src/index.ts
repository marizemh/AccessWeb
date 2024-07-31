import express from 'express';
import bodyParser from 'body-parser';
import accessRequestRouter from './routes/accessRequest';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json()); // Para poder parsear JSON en las solicitudes
app.use('/api', accessRequestRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


