import React, { useEffect, useState } from "react";
import axios from "axios";
import TravelDiary from "./TravelDiary";


const UserTravelDiaries = () => {
    const [user, setUser] = useState();

    const id = localStorage.getItem("userId");

    const sendRequest = async()=>{
        const res = await axios.get(`http://localhost:3000/api/traveldiaries/user/${id}` ).catch(err=>console.log(err));
        const data = await res.data;
        return data
    }

    useEffect(() => {
        sendRequest().then((data)=>setUser(data.user));
     }, []);
    console.log(user);

    return (
        <div>
            {" "} 
            {user && user.traveldiaries && 
               user.traveldiaries.map((diary,index) =>(
                    <TravelDiary 
                        id={diary._id}
                        key={index}
                        isUser={true}
                        title = {diary.title}
                        description = {diary.description}
                        imageURL = {diary.image}
                        userName = {user.name}/>
                ))}
        </div>
    );
};

export default UserTravelDiaries;