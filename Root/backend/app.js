import express from 'express';
import mongoose from 'mongoose';
import traveldiaryRouter from './routes/traveldiary-routes';
import router from './routes/user-routes';

const app = express ();

app.use (express.json());
app.use ("/api/user",router);
app.use ("/api/traveldiary",traveldiaryRouter);


mongoose
.connect ('mongodb+srv://admin:20220706MyWebApp@cluster0.jxak7.mongodb.net/TravelDiaryApp?retryWrites=true&w=majority')
.then(()=> app.listen (3000)) 
.then (()=> console.log("Connected To Database And Listening To Localhost 3000!"))
.catch((err) => console.log(err));



// 20220706MyWebApp = Password
// http://wallup.net/wp-content/uploads/2016/10/12/196603-dandelion-dew-macro.jpg
// https://images.hdqwalls.com/wallpapers/dandelion-umbrell-flying-fw.jpg