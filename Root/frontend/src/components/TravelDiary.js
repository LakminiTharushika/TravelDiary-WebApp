import React from "react";
import {Avatar, CardContent, CardMedia, Typography, Card, CardHeader } from "@mui/material";

const TravelDiary = ({title,description,imageURL,userName}) => {
    return (
        <div> <Card sx={{ width:"40%", margin:'auto',mt:2, padding:2, boxShadow:"10px 10px 20px #ccc", ":hover:" :{
            boxShadow:"15px 15px 30px #ccc"
        } }}>
        
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
              {userName}
            </Avatar>
          }
          
          title={title}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={imageURL}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      
      
      </Card> </div>
    )

}
export default TravelDiary;