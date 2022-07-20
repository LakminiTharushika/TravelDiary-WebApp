import React, { useState } from "react";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import { useNavigate} from "react-router-dom";
import axios from "axios";



const labelStyles = {marginBottom:1, marginTop:2, fontSize:"20px", fontWeight:"bold"}

const AddDiary = () => {

    const navigate = useNavigate()

    const [inputs, setInputs] = useState({
        title: "", 
        description:"", 
        imageURL:"",
    });

    const handleChange = (e) => {
        setInputs((prevState)=> ({
            ...prevState,
            [e.target.name] : e.target.value
        }));
    };


    const sendRequest = () => {
        const res = axios.post("https://funny-pocket-ant.cyclic.app/api/traveldiaries/add",{
            title: inputs.title,
            description: inputs.description,
            image: inputs.imageURL,
            user: localStorage.getItem("userId")
        }).catch(err=> console.log(err));

        const data = res.data;
        return data

    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(inputs);
        sendRequest();
        (()=>navigate)("/traveldiaries");
    };


    return (
        <div> 
            <form onSubmit={handleSubmit}> 
                <Box 
                    border={3} 
                    borderColor="blue" 
                    borderRadius={20} 
                    boxShadow="15px 15px 30px #ccc" 
                    padding={5} 
                    margin = "auto"
                    marginTop = {5}
                    display="flex"
                    flexDirection={"column"}
                    width={"60%"}
                    justifyContent = {'center'}
                    bgcolor = "#FFFFF2">


                        <Typography fontWeight={"bold"} padding={3} color="blueviolet" variant="h2" textAlign={"center"}>
                            Post Your Memo!
                        </Typography>

                        <InputLabel sx={labelStyles}> Title </InputLabel>
                        <TextField name={"title"} onChange={handleChange} value={inputs.title} margin="auto" variant="outlined" />

                        <InputLabel sx={labelStyles}> Description </InputLabel>
                        <TextField name={"description"} onChange={handleChange} value={inputs.description} margin="auto" variant="outlined" />

                        <InputLabel sx={labelStyles}> ImageURL </InputLabel>
                        <TextField name={"imageURL"} onChange={handleChange} value={inputs.imageURL} margin="auto" variant="outlined" />

                        <Button type="submit" sx={{mt:5, borderRadius:14}} variant="contained" color="warning" fontSize="25px"> 
                            submit Your Memo
                        </Button>


                </Box> 
            </form>
        </div>

    );
        
    
};
export default AddDiary;




   