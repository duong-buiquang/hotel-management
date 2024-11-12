import { Router } from "express";
import multer from "multer";
import { addHotel } from "../controllers/hotelController";

const router = Router();
const upload = multer({ dest: "uploads/" });

router.post("/add", upload.single("image"), addHotel);

export default router;
