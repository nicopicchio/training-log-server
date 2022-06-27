import express from 'express';
import { getData, addData } from '../controllers/dashboard.js';

const dashboardRouter = express.Router();

dashboardRouter.get('/get-data', getData);
dashboardRouter.post('/add-data', addData);

export default dashboardRouter;
