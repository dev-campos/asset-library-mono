import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import assetsRouter from './src/routes/assets';

const app = express();
const port = process.env.PORT ?? 5001;

// CORS configuration
const corsOptions = {
  origin: process.env.CORS_ORIGIN ?? 'http://localhost:3000',
  methods: (process.env.CORS_METHODS ?? 'GET,POST,PUT,DELETE').split(','),
  allowedHeaders: (process.env.CORS_ALLOWED_HEADERS ?? 'Content-Type').split(','),
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/assets', assetsRouter);

app.get('/', (_req, res) => {
  res.json({ message: 'Asset Library API' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
