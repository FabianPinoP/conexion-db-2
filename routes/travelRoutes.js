import express from 'express';
import {getAllTravels, createTravels} from '../src/controllers/travelsController.js';
const router = express.Router();


router.get('/travels', getAllTravels);
router.post('/travels', createTravels);

export default router;