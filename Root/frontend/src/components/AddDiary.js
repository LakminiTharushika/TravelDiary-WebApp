import { Box, InputLabel, TextField, Typography } from "@mui/material";
import React from "react";

const AddDiary = () => {
    return (
        <div>
           <form>
            <Box>
                <Typography>
                    Post Your Memo!
                </Typography>

                <InputLabel> Title </InputLabel>
                <TextField/>

                <InputLabel> Description </InputLabel>
                <TextField/>

                <InputLabel> ImageURL </InputLabel>
                <TextField/>


            </Box>
           </form>
          

        
        </div>
    )

}
export default AddDiary;