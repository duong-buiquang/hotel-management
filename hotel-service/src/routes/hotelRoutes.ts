import { Router } from 'express';
import multer from 'multer';
import {
  addHotel,
  hotelDetailById,
  showHotels
} from '../controllers/hotelController';

const router = Router();
const upload = multer({ dest: 'uploads/' });

router.post('/add', upload.array('image', 5), addHotel);
router.get('/', showHotels);
router.get('/:hotelId', hotelDetailById);

export default router;
