import express from 'express';
import { 
  getAllServices, 
  getServiceById,
  getServicesByCategory 
} from '../controllers/serviceController.js';

const router = express.Router();

router.get('/', getAllServices);
router.get('/:id', getServiceById);
router.get('/category/:category', getServicesByCategory);

export default router;