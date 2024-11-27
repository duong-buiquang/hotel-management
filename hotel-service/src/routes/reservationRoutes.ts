import { Router } from 'express';
import { makeReservation } from '../controllers/reservationController';

const router = Router();

router.post('/', makeReservation);

export default router;
