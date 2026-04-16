import express from 'express'
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cros from 'cros';

app.use(cros);
dotenv.config();
connectDB();

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cros({ origin: "http: // localhost:3000", credentials: true }));

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
