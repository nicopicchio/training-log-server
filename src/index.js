import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './routers/user.js';
import dashboardRouter from './routers/dashboard.js'

const app = express();
const port = process.env.PORT;
const dbURI = process.env.DB_URI;

mongoose.connect(dbURI, {
  useNewUrlParser: true
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRouter);
app.use('/data', dashboardRouter)

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
