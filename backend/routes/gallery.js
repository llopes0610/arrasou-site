import express from 'express';
import { 
  getAllGallery, 
  getGalleryById,
  getGalleryByType 
} from '../controllers/galleryController.js';

const router = express.Router();

router.get('/', getAllGallery);
router.get('/:id', getGalleryById);
router.get('/type/:serviceType', getGalleryByType);

export default router;