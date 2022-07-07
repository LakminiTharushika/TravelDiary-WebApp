import express from 'express';
import { getAllTravelDiary } from '../controllers/traveldiary-controller';

const router = express.Router();

router.get("/", getAllTravelDiary);