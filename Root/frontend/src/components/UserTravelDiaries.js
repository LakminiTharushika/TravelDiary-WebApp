import React, { useEffect, useState } from "react";
import axios from "axios";
import TravelDiary from "./TravelDiary";

const UserTravelDiaries = () => {
    const [traveldiaries, setTravelDiaries] = useState();

    const id = localStorage.getItem("userId");

    const sendRequest = async()=>{
        const res = await axios.get(`http://localhost:3000/api/traveldiaries/user/${id}`).catch(err=>console.log(err));
        const data = await res.data;
        return data
    }

    useEffect(() => {
        sendRequest().then((data)=>setTravelDiaries(data.traveldiaries.traveldiaries));
     }, []);
    console.log(traveldiaries);
    return <div> {traveldiaries && traveldiaries.map((diary,index) => 
        (<TravelDiary 
        title = {diary.title}
        description = {diary.description}
        imageURL = {diary.imageURL}
        userName = {diary.user.name}/>
    ))}</div>
};

export default UserTravelDiaries;