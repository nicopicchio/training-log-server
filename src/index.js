import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT;

const dbURI = 'mongodb+srv://nico:123@training-log.mi4ac.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}/`);
});
