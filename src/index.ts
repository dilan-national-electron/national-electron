import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import assetsRouter from './routes/assets';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'national-electron-api'
  });
});

// API routes
app.use('/api/assets', assetsRouter);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found'
  });
});

app.listen(PORT, () => {
  console.log(`National Electron API running on port ${PORT}`);
});
