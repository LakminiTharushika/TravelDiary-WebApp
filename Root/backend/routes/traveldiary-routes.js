import express from 'express';
import { addDiary, getAllTravelDiary, getById, updateDiary } from '../controllers/traveldiary-controller';

const traveldiaryRouter = express.Router();

traveldiaryRouter.get("/", getAllTravelDiary);
traveldiaryRouter.post("/add", addDiary);
traveldiaryRouter.put("/update/:id", updateDiary );
traveldiaryRouter.get("/:id", getById);

export default traveldiaryRouter;