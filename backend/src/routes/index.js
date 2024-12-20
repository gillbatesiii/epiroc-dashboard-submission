import express from 'express';

import UserRoutes from './user.js';
import MotorRoutes from './motor.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('This is the API root!');
});

router.use('/users', UserRoutes);

router.use('/motor', MotorRoutes);

export default router;
