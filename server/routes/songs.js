// called posts.js also 
import express from "express";
import auth from '../middleware/auth.js';
import { getSongs, createSong, updateSong, deleteSong } from "../controllers/songsController.js";

const router = express.Router();
//
router.get('/', getSongs);// do I want EVERYONE to see the songs or only those with authorization? Or those in a certain group?
router.post('/', createSong);
router.patch('/:id', updateSong); 
router.delete('/:id', deleteSong);

export default router;