import React from "react";
import {Avatar, Box, CardContent, CardMedia, Typography, Card, CardHeader, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";


const TravelDiary = ({title,description,imageURL,userName,isUser,id}) => {
  const navigate = useNavigate();

  const handleEdit = (e) =>{
    navigate(`/myDiaries/${id}`)
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
                <EditIcon/> 
              </IconButton>

              <IconButton > 
                <DeleteIcon/> 
              </IconButton>
              

            </Box>
          )}
          
        
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
              {userName}
            </Avatar>
          }
          
          title={title}
          subheader="July 18, 2022"
        />
        <CardMedia
          component="img"
          height="194"
          image={imageURL}
          alt="My Travel"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary"> 
          <b>{userName}</b> {": "} {description}
          </Typography>
        </CardContent>
      
      
      </Card> </div>
    )

}
export default TravelDiary;