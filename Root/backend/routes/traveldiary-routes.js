import express from 'express';
import { getAllTravelDiary } from '../controllers/traveldiary-controller';

const traveldiaryRouter = express.Router();

traveldiaryRouter.get("/", getAllTravelDiary);

export default traveldiaryRouter;