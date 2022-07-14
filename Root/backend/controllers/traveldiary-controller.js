import { request, response } from "express";
import mongoose from "mongoose";
import TravelDiary from "../model/TravelDiary";
import User from "../model/User";

//*****************************************************************************************
// GET ALL TRAVEL DIARY

export const getAllTravelDiary = async(req,res,next) =>{
    let traveldiaries;
    try{
        traveldiaries = await TravelDiary.find();

    }catch(err) {
        return console.log(err)
    }
    if(!traveldiaries){
        return res.status(404).json({message: "No TravelDiary Found!.."})

    }
    return res.status(200).json({traveldiaries})
}

//*****************************************************************************************
// FOR ADD A DIARY

export const addDiary = async(request, response, next) => {

    const {title,description,image,user} = request.body;

    let existingUser;
    try{
        existingUser = await User.findById(user);

    }catch(err) {
        return console.log(err)   
    }
    if(!existingUser){
        return response.status(400).json({message: "Unable To Find User By This Id!.."})
    }

    const diary = new TravelDiary({
        title,
        description,
        image,
        user,
    });

    try{
        const session = await mongoose.startSession();
        session.startTransaction();
        await diary.save({session});
        existingUser.traveldiaries.push(diary);
        await existingUser.save({session});
        await session.commitTransaction();

    }catch(err){
        console.log (err);
        return response.status(500).json({message: err});
    }
    return response.status(200).json({diary})
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
        return response.status(404).json({message: "No Diary Found From This ID!.."})
    }
    return response.status(200).json({diary});
};

//*****************************************************************************************
// FOR DELETE A DIARY BY ID

export const deleteDiary = async(request, response, next) => {

    const id = request.params.id;

    let diary;

    try{
        diary = await TravelDiary.findByIdAndRemove(id).populate("user");
        await diary.user.traveldiaries.pull(diary);
        await diary.user.save();

    }catch(err) {
        console.log(err)

    }
    if(!diary) {
        return response.status(500).json({message: "Unable to Delete!.."})
    }
    return response.status(200).json({message: "Successfully Deleted!."})
};

//*****************************************************************************************
// FOR GET BY USER ID

export const getByUserId = async(request,response,next) =>{
    const userId = request.params.id;

    let userTravelDiaries;
    try{
        userTravelDiaries = await User.findById(userId).populate("traveldiaries");

    }catch(err) {
        return console.log(err)

    }
    if(!userTravelDiaries){
        return response.status(404).json({message:"No Diary Found!.."})
    }
    return response.status(200).json({traveldiaries:userTravelDiaries})
};



