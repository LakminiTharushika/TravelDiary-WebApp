import React from "react";
import {Avatar, Box, CardContent, CardMedia, Typography, Card, CardHeader, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import axios from "axios";


const TravelDiary = ({title,description,imageURL,userName,isUser,id}) => {
  const navigate = useNavigate();

  const handleEdit = (e) =>{
    navigate(`/myDiaries/${id}`)
  };

  const deleteRequest = async()=>{
    const res = await axios.delete(`https://travel-diary-frontend.vercel.app/api/traveldiaries/${id}`).catch(err=>console.log(err));
    const data = await res.data;
    return data
  }
  const handleDelete = () =>{
    deleteRequest()
    .then(()=>navigate("/"))
    .then(()=>navigate("/traveldiaries"));

  }
  console.log(title, isUser);
    return (
        <div> 
          <Card sx={{ width:"40%", margin:'auto',mt:2, padding:2, boxShadow:"10px 10px 20px #ccc", ":hover:" :{
            boxShadow:"15px 15px 30px #ccc"
        } }}>

          {isUser && (
            <Box display="flex">
              <IconButton onClick={handleEdit} sx={{marginLeft:"auto"}}> 
                <EditIcon color="info" /> 
              </IconButton>

              <IconButton  onClick={handleDelete} > 
                <DeleteIcon color="error" />
              </IconButton>
              

            </Box>
          )}
          
        
        <CardHeader 
          avatar={
            <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
              {userName ? userName.charAt(0) : ""}
            </Avatar>
          }

          title={title}
          subheader="Make Your memories...all over the World!"
        />
        <CardMedia
          component="img"
          height="400"
          image={imageURL}
          alt="My Travel"
        />

        <CardContent>
        <hr />
        <br />
          <Typography variant="body2" color="text.secondary"> 
          <b>{userName}</b> {": "} {description}
          </Typography>
        </CardContent>
      
      
      </Card> </div>
    )

}
export default TravelDiary;