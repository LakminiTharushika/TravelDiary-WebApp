import React from "react";
import {
    Box, Button, TextField, Typography,
} from "@mui/material";

const Auth = () => {
    return (
        <div> 
            <form> 
                <Box>
                    <Typography> Login </Typography>
                    <TextField/>
                    <TextField/>
                    <TextField/>

                    <Button> Submit </Button>
                    <Button> Change To Signup </Button>


                </Box>
            </form>
        </div>
    )

}
export default Auth;