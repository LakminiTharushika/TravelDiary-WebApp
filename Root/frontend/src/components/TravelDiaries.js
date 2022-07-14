import React, { useEffect, useState } from "react";
import axios from "axios";
import TravelDiary from "./TravelDiary";


const TravelDiaries = () => {
    const [traveldiaries, setTravelDiaries] = useState();

    const sendRequest = async ()=>{
        const res = await axios.get("http://localhost:3000/api/traveldiaries").catch(err=>console.log(err));
        const data = await res.data;
        return data;
    }
    useEffect(() => {
        sendRequest ().then(data => setTravelDiaries(data.traveldiaries));
     }, [ ]);
     console.log(traveldiaries);
    return (
        <div>
            <TravelDiary/>
        </div>
    )

};

export default TravelDiaries;