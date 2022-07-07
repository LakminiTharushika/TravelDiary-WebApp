import { request, response } from "express";
import TravelDiary from "../model/TravelDiary";

export const getAllTravelDiary = async(request, response, next) => {
    let traveldiary;
    try{
        traveldiary = await TravelDiary.find();

    }catch (err) {
        return console.log(err)
    }

    if(!traveldiary) {
        return response.status(404).json({message: "No TravelDiary Found!.."})
    }

    return response.status(200).json({traveldiary})
}