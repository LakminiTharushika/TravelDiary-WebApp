import React from "react";
import {
    Box, Button, TextField, Typography,
} from "@mui/material";

const Auth = () => {
    return (
        <div> 
            <form> 
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
                    <Typography variant="h3" padding={3} textAlign="center"> Login </Typography>
                    <TextField placeholder="Your Name" margin="normal"  />
                    <TextField type={"email"} placeholder="Your Email Address" margin="normal"  />
                    <TextField type={"password"}placeholder="Password" margin="normal"  />

                    <Button variant="contained" sx={{borderRadius:5, marginTop:3}} color="warning"> Submit </Button>
                    <Button sx={{borderRadius:5, marginTop:3}} color="warning"> Change To Signup </Button>


                </Box>
            </form>
        </div>
    )

}
export default Auth;