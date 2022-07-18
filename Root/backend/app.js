import express from 'express';
import mongoose from 'mongoose';
import traveldiaryRouter from './routes/traveldiary-routes';
import router from './routes/user-routes';
import cors from 'cors';

const app = express ();

app.use(cors());

app.use (express.json());
app.use ("/api/user",router);
app.use ("/api/traveldiaries",traveldiaryRouter);


mongoose
.connect ('mongodb+srv://admin:20220706MyWebApp@cluster0.jxak7.mongodb.net/TravelDiaryApp?retryWrites=true&w=majority')
.then(()=> app.listen (4000)) 
.then (()=> console.log("Connected To Database And Listening To Localhost 4000!"))
.catch((err) => console.log(err));



// 20220706MyWebApp = Password
// http://wallup.net/wp-content/uploads/2016/10/12/196603-dandelion-dew-macro.jpg
// https://images.hdqwalls.com/wallpapers/dandelion-umbrell-flying-fw.jpg