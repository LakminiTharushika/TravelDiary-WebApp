import express from 'express';
import { addDiary, getAllTravelDiary, updateDiary } from '../controllers/traveldiary-controller';

const traveldiaryRouter = express.Router();

traveldiaryRouter.get("/", getAllTravelDiary);
traveldiaryRouter.post("/add", addDiary);
traveldiaryRouter.put("/update/:id", updateDiary );

export default traveldiaryRouter;