import { request, response } from "express";
import TravelDiary from "../model/TravelDiary";

//*****************************************************************************************
// GET ALL TRAVEL DIARY
export const getAllTravelDiary = async(request, response, next) => {

    let traveldiaries;
    try{
        traveldiaries = await TravelDiaries.find();

    }catch (err) {
        return console.log(err)
    }

    if(!diary) {
        return response.status(404).json({message: "No TravelDiary Found!.."})
    }

    return response.status(200).json({traveldiaries})
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

//*****************************************************************************************
// FOR GET BY ID

export const getById = async(request, response, next) => {

    const id = request.params.id;

    let diary;

    try{
        diary = await TravelDiary.findById(id);
        
    }catch(err) {
        return console.log(err)

    }
    if(!diary) {
        return response.status(500).json({message: "No Diary Found!.."})
    }
    return response.status(200).json({diary})
};

//*****************************************************************************************
// FOR DELETE A DIARY BY ID

export const deleteDiary = async(request, response, next) => {

    const id = request.params.id;

    let diary;

    try{
        diary = await TravelDiary.findOneAndRemove(id);
        
    }catch(err) {
        return console.log(err)

    }
    if(!diary) {
        return response.status(500).json({message: "Unable to Delete!.."})
    }
    return response.status(200).json({message: "Successfully Deleted!."})
};



