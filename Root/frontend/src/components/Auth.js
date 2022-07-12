import React, { useState } from "react";
import {  Box, Button, TextField, Typography,} from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [inputs, setInputs] = useState({
        name: "", email:"", password:""
    });

    const [isSignup, setIsSignup] = useState(false);

    const handleChange = (e) => {
        setInputs((prevState)=> ({
            ...prevState,
            [e.target.name] : e.target.value
        }));
    };

    const sendRequest = async (type="login")=>{
        const res = await axios.post(`http://localhost:3000/api/user/${type}`, {
            name: inputs.name,
            email: inputs.email,
            password: inputs.password
        }).catch(err=> console.log(err));

        const data = await res.data;
        return data;

        }
    

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(inputs);
    if(isSignup){
        sendRequest("signup")
        .then(() =>dispatch(authActions.login()))
        .then(()=>navigate("/traveldiaries"))
        .then(data=>console.log(data))
    }else{
        sendRequest()
        .then(() =>dispatch(authActions.login()))
        .then(()=>navigate("/traveldiaries"))
        .then(data=>console.log(data))
    }
    };


    return (
        <div> 
            <form onSubmit={handleSubmit}> 
                <Box 
                maxWidth={450}
                display = "flex" 
                flexDirection = {'column'} 
                alignItems = "center" 
                justifyContent = {'center'}
                boxShadow = "15px 15px 15px 10px #ccc"
                padding = {3}
                margin = "auto"
                marginTop = {5}
                borderRadius = {5}
                bgcolor = "#FFFFF2"
                >
                    <Typography variant="h3" padding={3} textAlign="center"> 
                    {isSignup ? "Signup" :"Login"} 
                    </Typography>
                  

                    {isSignup && 
                    <TextField 
                    name = "name"
                    onChange = {handleChange} 
                    value  = {inputs.name} 
                    placeholder = "Your Name" 
                    margin = "normal"  />} {" "}

                    <TextField 
                    name = "email"
                    onChange = {handleChange}
                    type = {"email"} 
                    value = {inputs.email}  
                    placeholder = "Your Email Address" 
                    margin = "normal"  />

                    <TextField 
                    name = "password"
                    onChange = {handleChange}
                    type = {"password"} 
                    value = {inputs.password} 
                    placeholder = "Password" 
                    margin = "normal"  />

                    <Button 
                    type="submit"
                    variant="contained" 
                    sx={{borderRadius:5, marginTop:3}} 
                    color="warning"> Submit Your Details 
                    </Button>

                    <Button 
                    onClick={()=>setIsSignup(!isSignup)} 
                    sx={{borderRadius:5, marginTop:3}} 
                    color="warning"> Change To {isSignup ? "Login" :"Signup"} 
                    </Button>


                </Box>
            </form>
        </div>
    );

};
export default Auth;