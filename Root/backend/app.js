import express, { response } from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes';

const app = express ();

app.use(express.json());
app.use("/api/user",router);

mongoose
.connect ('mongodb+srv://admin:20220706MyWebApp@cluster0.jxak7.mongodb.net/TravelDiaryApp?retryWrites=true&w=majority')
.then(()=> app.listen (5000)) 
.then (()=> console.log("Connected To Database And Listening To Localhost 5000!"))
.catch((err) => console.log(err));



// 20220706MyWebApp = Password
// http://wallup.net/wp-content/uploads/2016/10/12/196603-dandelion-dew-macro.jpg
// https://images.hdqwalls.com/wallpapers/dandelion-umbrell-flying-fw.jpg