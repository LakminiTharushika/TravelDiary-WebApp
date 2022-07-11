import React, { useState } from "react";
import {
    AppBar, 
    Typography, 
    Toolbar, 
    Box,
    Tabs,
    Tab, 
    Link,
    Button,} from '@mui/material';

const Header = () => {
    const [value, setValue] = useState ()
    return (
        <AppBar
        position = "sticky"
        sx={{
            background: "linear-gradient( 135deg, #1904E5 10%, #BC78EC 100%);"}}>
            <Toolbar>
                <Typography variant="h3"> TravelDiary App </Typography>

                <Box display="flex" marginLeft={'auto'} marginRight={'auto'}>
                    <Tabs textColor="inherit" 
                    value={value} 
                    onChange={(e,val) =>setValue(val)}>

                        <Tab LinkComponent={Link} to="/traveldiaries" label = "ALL DIARIES"/>
                        <Tab LinkComponent={Link} to="/myDiaries" label = "MY DIARIES"/>
                        <Tab LinkComponent={Link} to="/traveldiaries/add" label = "ADD DIARY"/>
                    </Tabs>
                </Box>


                <Box display="flex" marginLeft="auto">
                    <Button variant="contained" sx={{margin: 1, borderRadius:20}} color="warning"> 
                    Login </Button>

                    <Button variant="contained" sx={{margin: 1, borderRadius:20}} color="warning"> 
                    Signup </Button>

                    <Button variant="contained" sx={{margin: 1, borderRadius:20}} color="warning"> 
                    LOGOUT </Button>
                </Box>

            </Toolbar>
        </AppBar>

    );
    
}
export default Header;