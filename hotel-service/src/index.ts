// File: src/index.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db';
import hotelRoutes from './routes/hotelRoutes';
import userRoutes from './routes/userRoutes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5002;

connectDB();
app.use(cors());
app.use(express.json());
app.use('/api/hotels', hotelRoutes);
app.use('/api/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Hotel Service running on port ${PORT}`);
});
