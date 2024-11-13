import { Router } from 'express';
import multer from 'multer';
import { addHotel, showHotels } from '../controllers/hotelController';

const router = Router();
const upload = multer({ dest: 'uploads/' });

router.post('/add', upload.array('image', 5), addHotel);
router.get('/', showHotels);

export default router;
