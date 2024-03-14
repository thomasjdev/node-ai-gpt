import * as dotenv from 'dotenv';
import express, {Application} from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app: Application = express();

app.get('/', async (req, res) => {
  res.send('Hello World');
});

const PORT = process.env.PORT || 3000;
try {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
} catch (error) {
  console.error(error);
}
