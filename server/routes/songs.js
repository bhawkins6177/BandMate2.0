// called posts.js also 
import express from "express";

import { getSongs, createSong } from "../controllers/songsController.js";

const router = express.Router();

router.get('/', getSongs);
router.post('/', createSong);

export default router;