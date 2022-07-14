import React, { useEffect, useState } from "react";
import axios from "axios";

const UserTravelDiaries = () => {
    const [traveldiaries, setTravelDiaries] = useState();

    const id = localStorage.getItem("usrId");

    const sendRequest = async() =>{
        const res = await axios.get(`http://localhost:3000/api/traveldiaries/user/${id}`).catch(err=>console.log(err));
        const data = await res.data;
        return data
    }

    useEffect(() => { 
        sendRequest().then((data)=>setTravelDiaries(data.traveldiaries.traveldiaries));
    }, []);
    console.log(traveldiaries);

    return (
        <div> UserTravelDiaries </div>
    )
};

export default UserTravelDiaries;