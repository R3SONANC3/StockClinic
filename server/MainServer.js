import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

// Load .env variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Use morgan logger only in development environment
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
