import React from 'react'
import { Container, Box } from '@mui/material'
import AboutUsImg from '../images/about-us.png'

export default function AboutUs() {
  return (
    <Container maxWidth='xl' sx={{ display: {md: 'flex', xs: 'block'}, height: '100vh', alignItems: 'center' }}>
      <Box width={{md: '50%', xs: '100%'}} >
        <h1 style={{ marginTop: 0, fontSize: 40 }}>About Us</h1>
        <p style={{ fontSize: 30 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Box>
      <Box width={{md: '50%', xs: '100%'}}>
        <img src={AboutUsImg} alt='' width={'100%'} />
      </Box>
    </Container>
  )
}
