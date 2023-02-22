import React from 'react'
import { Button, Box, Container } from '@mui/material/';
import {useNavigate} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios';


const textStyle = {
    fontSize: 20,
    cursor: 'pointer'
}

export default function Navbar() {
    const navigate = useNavigate()

    const handleLogin = () => {
        axios({
            url: "https://api.wannabedevs.com/",
            // url: "http://localhost:3000/",
            method: 'get',
            withCredentials: true
        }).then(res => {
            console.log(res.data)
        })
    }

    const handleNavigate = (path) => {
        navigate(path)
    }
    return (
        <Container maxWidth='xl'>
            <Box display='flex' justifyContent={'space-between'} alignItems='center'>
                <Box flex={1} display={'flex'}>
                    <h1 style={{cursor: 'pointer'}} onClick={()=> handleNavigate('/')}>Econox</h1>
                </Box>

                <Box flex={1} display={{md: 'flex', xs: 'none'}} justifyContent={'space-between'}>
                    <p style={{fontSize: 20, cursor: 'pointer'}} onClick={()=> handleNavigate('/project')}>Project</p>
                    <p style={textStyle} onClick={()=> handleNavigate('/story')}>Story</p>
                    <p style={textStyle} onClick={()=> handleNavigate('/about-us')}>About Us</p>
                    <p style={textStyle} onClick={()=> handleNavigate('/contact-us')}>Contact Us</p>
                </Box>

                <Box flex={1} display={{xs: 'none', md:'flex'}} justifyContent={'flex-end'}>
                    <Button variant="contained" color='success' sx={{marginRight: 2}} onClick={handleLogin}>Sign in</Button>
                    <Button variant="contained" >Sign up</Button>
                </Box>

                
                <MenuIcon fontSize='large' sx={{display: {md: "none", xs: "flex"}}}/>
            </Box>
        </Container>
    )
}
