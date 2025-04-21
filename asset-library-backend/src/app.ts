import express from 'express';
import cors from 'cors';
import assetsRouter from './routes/assets';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/assets', assetsRouter);

export default app; 