import express from 'express';
import { 
    addDiary, 
    deleteDiary, 
    getAllTravelDiary,
    getById,
    getByUserId,
    updateDiary } from '../controllers/traveldiary-controller.js';

const traveldiaryRouter = express.Router();

traveldiaryRouter.get("/", getAllTravelDiary);
traveldiaryRouter.post("/add", addDiary);
traveldiaryRouter.put("/update/:id", updateDiary );
traveldiaryRouter.get("/:id", getById);
traveldiaryRouter.delete("/:id", deleteDiary);
traveldiaryRouter.get("/user/:id",getByUserId );

export default traveldiaryRouter;