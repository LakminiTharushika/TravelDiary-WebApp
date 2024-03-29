import React, { useEffect, useState } from "react";
import axios from "axios";
import TravelDiary from "./TravelDiary";



const TravelDiaries = () => {
    const [traveldiaries, setTravelDiaries] = useState();

    const sendRequest = async ()=>{
        const res = await axios.get("https://funny-pocket-ant.cyclic.app/api/traveldiaries").catch(err=>console.log(err));
        const data = await res.data;
        return data;
    }
    useEffect(() => {
        sendRequest ().then(data => setTravelDiaries(data.traveldiaries));
     }, [ ]);
     console.log(traveldiaries);
    return (
        <div>
            {traveldiaries && traveldiaries.map((diary,index) => (
            <TravelDiary
                id={diary._id}
                isUser={localStorage.getItem("userId") === diary.user._id}
                title = {diary.title}
                description = {diary.description}
                imageURL = {diary.image}
                userName = {diary.user.name}/>
            ))}
        </div>
    )

};

export default TravelDiaries;