import React from "react";
import { Box, Typography, useTheme } from '@mui/material'
import { NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import  toast from "react-hot-toast";
const Navbar = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const loggedIn = JSON.parse(localStorage.getItem('authToken'));

    // handle Logout
    const handleLogout = async()=>{
        try{
            // await axios.post('/api/v1/auth/logout');       // it's showing me axios error
            localStorage.removeItem('authToken');             // ? use of localStorage and token here
            toast.success('Logout Successfully');
            navigate('/login');
        }
        catch(err){
            console.log(err);
        }
    };
    return (
        <Box width={'100%'}
            backgroundColor={theme.palette.background.alt}
            p="1rem 6%"
            textAlign={'center'}
            sx={{ boxShadow: 3, mb: 2 }} 
        >
            <Typography variant="h2" color="#60bf70" fontWeight="bold">      {/*color self maintained*/}
                ApnaGPT
            </Typography>
            {
                loggedIn ? (<NavLink to="/login" onClick={handleLogout} p={1}>Logout</NavLink>) : (<>
                <NavLink to="/register" p={1}>Sign Up</NavLink>
                <NavLink to="/login" p={1}>Sign IN</NavLink>
                </>)
            }
        </Box>
    );
};

export default Navbar;