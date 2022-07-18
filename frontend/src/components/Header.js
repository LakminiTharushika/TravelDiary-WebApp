import React, { useState } from "react";
import {
    AppBar, 
    Typography, 
    Toolbar, 
    Box,
    Tabs,
    Tab,
    Button,} from '@mui/material';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";

const Header = () => {

    const dispatch = useDispatch();

    const isLoggedIn = useSelector(state=> state.isLoggedIn);

    const [value, setValue] = useState ()
    return (

        <div style={{backgroundImage:`url("http://www.hdwallpaperspulse.com/wp-content/uploads/2016/09/02/great-hd-world-wallpaper.jpg")`}}>
        
            <AppBar
            position = "sticky"
            sx={{ background: "linear-gradient( 135deg, #1904E5 10%, #BC78EC 100%);"}}>

                <Toolbar >
                    <Typography variant="h3"> TravelDiary WebApp</Typography>

                    {isLoggedIn && 

                    <Box  display="flex" marginLeft={'auto'} marginRight={'auto'}>
                        <Tabs textColor="inherit" 
                        value={value} 
                        onChange={(e,val) =>setValue(val)}>

                            <Tab LinkComponent={Link} to="/traveldiaries" label = "ALL DIARIES"/>
                            <Tab LinkComponent={Link} to="/myDiaries" label = "MY DIARIES"/>
                            <Tab LinkComponent={Link} to="/traveldiaries/add" label = "ADD DIARY"/>
                        </Tabs>
                    </Box>}


                    <Box display="flex" marginLeft="auto">
                        {!isLoggedIn && <> 
                        <Button LinkComponent={Link} to="/auth" 
                        variant="contained" 
                        sx={{margin: 1, borderRadius:15}} 
                        color="warning"> 
                        Login </Button>

                        <Button 
                        LinkComponent={Link} to="/auth" 
                        variant="contained" 
                        sx={{margin: 1, borderRadius:15}} 
                        color="warning"> 
                        Signup 
                        </Button> </>}



                        {isLoggedIn && 
                        <Button
                        onClick={()=>dispatch(authActions.logout())} 
                        LinkComponent={Link} to="/auth" 
                        variant="contained" 
                        sx={{margin: 1, borderRadius:15}} 
                        color="warning"> 
                        LOGOUT 
                        </Button>}
                    </Box>

                </Toolbar>
            </AppBar>
    
        </div>


    );
    
}
export default Header;