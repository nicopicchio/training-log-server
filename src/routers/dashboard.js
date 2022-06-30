import express from 'express';
import { getData, addData } from '../controllers/dashboard.js';
import { validateAuthentication } from '../middleware/auth.js';

const dashboardRouter = express.Router();

dashboardRouter.get('/', validateAuthentication, getData)
dashboardRouter.patch('/', validateAuthentication, addData);

export default dashboardRouter;
