import React from "react";
import {Avatar, CardContent, CardMedia, Typography, Card, CardHeader } from "@mui/material";

const TravelDiary = () => {
    return (
        <div> <Card sx={{ width:"40%", margin:'auto',mt:2, padding:2, boxShadow:"10px 10px 20px #ccc", ":hover:" :{
            boxShadow:"15px 15px 30px #ccc"
        } }}>
        
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
              R
            </Avatar>
          }
          
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
      
      
      </Card> </div>
    )

}
export default TravelDiary;