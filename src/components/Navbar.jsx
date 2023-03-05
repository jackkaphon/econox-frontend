import React from 'react'
import { Button, Box, Container, IconButton, Menu, MenuItem, Avatar } from '@mui/material/';
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
// import axios from 'axios';


const textStyle = {
    fontSize: 20,
    cursor: 'pointer'
}

export default function Navbar(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };



    const navigate = useNavigate()

    // const handleLogin = () => {
    //     axios({
    //         url: "https://api.wannabedevs.com/login",
    //         // url: "http://localhost:3000/",
    //         method: 'post',
    //         withCredentials: true
    //     }).then(res => {
    //         console.log(res.data)
    //     })
    // }

    const handleLogin = () => {
        props.setopenSignInDiag(true)
        setAnchorEl(null);
    }

    const handleSignUp = () => {
        props.setopenSignUpDiag(true)
        setAnchorEl(null);
    }

    const handleNavigate = (path) => {
        navigate(path)
    }

    const handleNavigateMenu = (path) => {
        navigate(path)
        setAnchorEl(null);
    }
    return (
        <Box >
            <Container maxWidth='xl'>
                <Box display='flex' justifyContent={'space-between'} alignItems='center'>
                    <Box flex={1} display={'flex'}>
                        <h1 style={{ cursor: 'pointer' }} onClick={() => handleNavigate('/')}>Econox</h1>
                    </Box>

                    <Box flex={1} display={{ md: 'flex', xs: 'none' }} justifyContent={'space-between'}>
                        <p style={{ fontSize: 20, cursor: 'pointer' }} onClick={() => handleNavigate('/project')}>Project</p>
                        <p style={textStyle} onClick={() => handleNavigate('/story')}>Story</p>
                        <p style={textStyle} onClick={() => handleNavigate('/about-us')}>About Us</p>
                        <p style={textStyle} onClick={() => handleNavigate('/contact-us')}>Contact Us</p>
                    </Box>


                    <Box flex={1} display={{ xs: 'none', md: 'flex' }} justifyContent={'flex-end'}>
                        {props.isLoggedIn ?
                            <IconButton onClick={() => handleNavigate('/profile')}>
                                <Avatar>J</Avatar>
                            </IconButton>
                            :
                            <>
                                <Button variant="contained" color='success' sx={{ marginRight: 2 }} onClick={handleLogin}>Sign in</Button>
                                <Button variant="contained" onClick={handleSignUp}>Sign up</Button>
                            </>
                        }
                    </Box>

                    <Box sx={{ display: { md: "none", xs: "flex" } }}>
                        <IconButton onClick={handleClick}>
                            <MenuIcon fontSize='large' />
                        </IconButton>

                    </Box>

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={() => handleNavigateMenu('/project')}>Project</MenuItem>
                        <MenuItem onClick={() => handleNavigateMenu('/story')}>Story</MenuItem>
                        <MenuItem onClick={() => handleNavigateMenu('/about-us')}>About Us</MenuItem>
                        <MenuItem onClick={() => handleNavigateMenu('/contact-us')}>Contact Us</MenuItem>
                        <MenuItem >
                            <Button variant='contained' color='success' fullWidth onClick={handleLogin}>Sign In</Button>
                        </MenuItem>
                        <MenuItem>
                            <Button variant='contained' fullWidth onClick={handleSignUp}>Sign Up</Button>
                        </MenuItem>
                    </Menu>
                </Box>
            </Container>
        </Box>
    )
}
