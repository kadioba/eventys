import dotenv from 'dotenv';
import express from 'express'
import router from './routers/indexRouter';

dotenv.config();

const app = express();

app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server running on port 5000"));