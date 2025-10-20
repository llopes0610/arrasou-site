import express from 'express';
import { 
  createAppointment, 
  getAppointments,
  getAppointment 
} from '../controllers/appointmentController.js';

const router = express.Router();

router.post('/', createAppointment);
router.get('/', getAppointments);
router.get('/:id', getAppointment);

export default router;