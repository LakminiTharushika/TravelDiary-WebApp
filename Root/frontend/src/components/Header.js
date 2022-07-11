import React from "react";
import {
    AppBar, 
    Typography, 
    Toolbar, 
    Box, 
    Button} from '@mui/material';

const Header = () => {
    return (
        <AppBar sx={{background: "linear-gradient( 135deg, #1904E5 10%, #BC78EC 100%);"}}>
            <Toolbar>
                <Typography variant="h4"> TravelDiaryApp </Typography>
                <Box display="flex" marginLeft="auto">
                    <Button variant="contained" sx={{margin: 1, borderRadius:20}} color="warning"> 
                    Login </Button>
                    <Button variant="contained" sx={{margin: 1, borderRadius:20}} color="warning"> 
                    Signup </Button>
                </Box>

            </Toolbar>
        </AppBar>

    );
    
}
export default Header;