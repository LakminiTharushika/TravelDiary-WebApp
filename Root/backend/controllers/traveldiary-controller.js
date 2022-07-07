import { request, response } from "express";
import TravelDiary from "../model/TravelDiary";

//*****************************************************************************************
// GET ALL TRAVEL DIARY
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
};

//*****************************************************************************************
// FOR ADD A DIARY

export const addDiary = async(request, response, next) => {

    const {title,description,image,user} = request.body;

    const diary = new TravelDiary({
        title,
        description,
        image,
        user,
    });

    try{
        await diary.save();

    }catch(err){
        return console.log (err);

    }
    return response.status(201).json({diary})

};

//*****************************************************************************************
// FOR UPDATE A DIARY

export const updateDiary = async(request, response, next) => {

    const {title,description} = request.body;
    const diaryId = request.params.id;

    let diary;

    try{
        diary = await TravelDiary.findByIdAndUpdate(diaryId,{
            title,
            description
        })
        
    }catch(err) {
        return console.log(err)

    }
    if(!diary) {
        return response.status(500).json({message: "Unable to UPDATE the Diary!.."})
    }
    return response.status(200).json({diary})


};



