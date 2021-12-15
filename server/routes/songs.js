// called posts.js also 
import express from "express";

import { getSongs, createSong, updateSong } from "../controllers/songsController.js";

const router = express.Router();

router.get('/', getSongs);
router.post('/', createSong);
router.patch('/:id', updateSong) //used to update existing docs

export default router;