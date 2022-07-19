import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";

const DiaryDetails = () => {

    const navigate = useNavigate()

    const labelStyles = {marginBottom:1, marginTop:2, fontSize:"20px", fontWeight:"bold"}

    const [diary, setTravelDiary] = useState();
    const id = useParams().id;
    console.log(id);

    const [inputs, setInputs] = useState({
       
    });

    const handleChange = (e) => {
        setInputs((prevState)=> ({
            ...prevState,
            [e.target.name] : e.target.value
        }));
    };


    const fetchDetails = async() =>{
        const res = await axios.get(`https://travel-diary-frontend.vercel.app/api/traveldiaries/${id}`).catch(err=>console.log(err));
        const data = await res.data;
        return data;
    };

    useEffect(()=>{
        fetchDetails().then(data=>{
            setTravelDiary(data.diary)
            setInputs({
                title: data.diary.title,
                description: data.diary.description,
                imageURL: data.diary.image })
            });

        },[id]);
        const sendRequest = async() =>{
            const res = await axios.put(`http://localhost:3000/api/traveldiaries/update/${id}`,{
                title: inputs.title,
                description: inputs.description,
              
            }).catch(err=>console.log(err));

            const data = await res.data;
            return data
        }
        console.log(diary);

   
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(inputs);
        sendRequest().then(data=>console.log(data)).then(()=>navigate)("/myDiaries");
        
    }


    return (
        <div>
            {inputs &&
             <form onSubmit={handleSubmit}> 
                <Box 
                    border={5} 
                    borderColor="blue" 
                    borderRadius={20} 
                    boxShadow="15px 15px 30px #ccc" 
                    padding={5} 
                    margin = "auto"
                    marginTop = {5}
                    display="flex"
                    flexDirection={"column"}
                    width={"80%"}
                    justifyContent = {'center'}
                    bgcolor = "#FFFFF2">


                        <Typography fontWeight={"bold"} padding={3} color="blueviolet" variant="h2" textAlign={"center"}>
                            Post Your Memo!
                        </Typography>

                        <InputLabel sx={labelStyles}> Title </InputLabel>
                        <TextField name={"title"} onChange={handleChange} value={inputs.title} margin="auto" variant="outlined" />

                        <InputLabel sx={labelStyles}> Description </InputLabel>
                        <TextField name={"description"} onChange={handleChange} value={inputs.description} margin="auto" variant="outlined" />


                        <Button type="submit" sx={{mt:5, borderRadius:14}} variant="contained" color="warning" fontSize="25px"> 
                            submit Your Memo
                        </Button>


                </Box> 
            </form>
        }</div>
    )
    
}
export default DiaryDetails;