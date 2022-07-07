import { request, response } from "express";
import User from "../model/User";
import bcrypt from 'bcryptjs';

//*****************************************************************************************
// GET ALL USERS
export const getAllUser = async (request, response, next) =>{
    let users;
    try{
        users = await User.find ();

    } catch (err) {
        console.log(err);

    }
    if(!users) {
        return response
        .status(404)
        .json({message: "No Users Found!"});
    }
    return response.status(200).json({users});
};
 
//*****************************************************************************************
// FOR SIGNUP
 export const signup = async (request, response, next) => {
     const {name, email,password} = request.body;

     let existingUser ;
     try{
         existingUser = await User.findOne({email});
     } catch (err){
         return console.log(err);
     }

     if (existingUser) {
         return response
         .status (400)
         .json ({message: "User Already Exist!.. Login Instead!" })
     }
     const hashedPassword = bcrypt.hashSync(password);

     const user = new User ({
         name,
         email,
         password: hashedPassword,
         diary:[],
     });

     try{
         await user.save();

     }catch(err){
         return console.log (err);

     }
     return response.status(201).json({user})

 };

 //*****************************************************************************************
 // FOR LOGIN
 export const login = async (request, response, next) => {
    const {email,password} = request.body;
    let existingUser ;
     try{
         existingUser = await User.findOne({email});
     } catch (err){
         return console.log(err);
     }

     if (!existingUser) {
         return response
         .status (404)
         .json ({message: "Sorry... Couldn't Find User By This Email." })
     }

     const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
     if (!isPasswordCorrect) {
         return response
         .status(400)
         .json ({message: "Incorrect Password!!!"});
     }
     return response.status(200).json ({message: "Login Successful!!.."})

 }