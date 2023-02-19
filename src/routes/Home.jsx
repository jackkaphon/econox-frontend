import React from 'react'
import { Container, Box, Button } from '@mui/material'
import ImgBackground from '../images/green-energy3.png'

export default function Home() {
  return (
    <Container maxWidth='xl' sx={{ display: {md: 'flex', xs: 'block'}, height: '100vh', marginTop: 10 }}>
      <Box flex={1}>
        <h1 style={{fontSize: 48}}>Welcome to Econox Laos</h1>
        <p style={{fontSize: 20}}>We provide services for Environmental Impact Assessment, Consultancy for Corporate Social Responsibility.</p>
        <Button variant='contained'>Contact Us</Button>
      </Box>
      <Box flex={1}>
        <img src={ImgBackground} alt='' width={'100%'}/>
      </Box>
    </Container>
  )
}
