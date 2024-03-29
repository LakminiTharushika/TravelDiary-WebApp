import express from 'express';
import mongoose from 'mongoose';
import traveldiaryRouter from './routes/traveldiary-routes.js';
import router from './routes/user-routes.js';
import cors from 'cors';

const app = express ();

app.use(cors());

app.use (express.json());
app.use ("/api/user",router);
app.use ("/api/traveldiaries",traveldiaryRouter);


mongoose
.connect ('mongodb+srv://admin:20220706MyWebApp@cluster0.jxak7.mongodb.net/TravelDiaryApp?retryWrites=true&w=majority')
.then(()=> app.listen (3005)) 
.then (()=> console.log("Connected To Database And Listening To Localhost 5000!"))
.catch((err) => console.log(err));



// 20220706MyWebApp = Password
// http://wallup.net/wp-content/uploads/2016/10/12/196603-dandelion-dew-macro.jpg
// https://images.hdqwalls.com/wallpapers/dandelion-umbrell-flying-fw.jpg
// https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?cs=srgb&dl=pexels-julius-silver-753626.jpg&fm=jpg

// https://wallpaperaccess.com/full/1431622.jpg    (baloons)
// https://cutewallpaper.org/21/travel-wallpaper-hd/Travelling-Wallpapers-Wallpaper-Cave.jpg  (Girl and boy)
// https://wallpaperaccess.com/full/455146.jpg  (Girl)
