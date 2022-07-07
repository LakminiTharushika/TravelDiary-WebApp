import express from 'express';
import { addDiary, getAllTravelDiary } from '../controllers/traveldiary-controller';

const traveldiaryRouter = express.Router();

traveldiaryRouter.get("/", getAllTravelDiary);
traveldiaryRouter.post("/add", addDiary);

export default traveldiaryRouter;