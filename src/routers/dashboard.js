import express from 'express';
import { getData, addData } from '../controllers/dashboard.js';
// import { validateAuthentication } from '../middleware/auth.js';

const dashboardRouter = express.Router();

dashboardRouter.get('/', getData)
dashboardRouter.post('/add-data', addData);

export default dashboardRouter;
