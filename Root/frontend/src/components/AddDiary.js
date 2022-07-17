import { Box, InputLabel, TextField, Typography } from "@mui/material";
import React from "react";

const labelStyles = {marginBottom:1, marginTop:2, fontSize:"25px", fontWeight:"bold"}
const AddDiary = () => {
    return (
        <div>
           <form>
            <Box 
            border={5} 
            borderColor="blue" 
            borderRadius={20} 
            boxShadow="15px 15px 30px #ccc" 
            padding={5} 
            margin={3}
            marginTop={3}
            display="flex"
            flexDirection={"column"}
            width={"80%"}
            bgcolor = "#FFFFF2">


                <Typography fontWeight={"bold"} padding={3} color="blueviolet" variant="h2" textAlign={"center"}>
                    Post Your Memo!
                </Typography>

                <InputLabel sx={labelStyles}> Title </InputLabel>
                <TextField margin="auto" variant="outlined" />

                <InputLabel sx={labelStyles}> Description </InputLabel>
                <TextField margin="auto" variant="outlined" />

                <InputLabel sx={labelStyles}> ImageURL </InputLabel>
                <TextField margin="auto" variant="outlined" />


            </Box>
           </form>
          

        
        </div>
    )

}
export default AddDiary;