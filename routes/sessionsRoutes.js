import express from 'express';
import {getAllSessions} from '../src/controllers/sessionsController.js';
const router = express.Router();

router.get('/sessions', getAllSessions);

export default router;