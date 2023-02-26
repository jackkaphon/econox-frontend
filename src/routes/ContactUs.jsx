import React from 'react'
import { Container, Typography, TextField, Box, Stack, Button } from '@mui/material'
import MailLogo from '../images/mail.png'

export default function ContactUs() {
  return (
    <Container maxWidth='xl' sx={{justifyContent: 'center', display: 'flex', flexDirection: 'column', height: '100vh'}}>
      <Typography variant='h4' align='center'>Have Some Questions?</Typography>

      <Box display={'flex'} flexDirection={{xs: 'column', md: 'row'}} justifyContent='center' alignItems={'center'}>
        <Box width={'50%'} display='flex' justifyContent={'center'} alignItems='center'>
          <img src={MailLogo} alt='' width={'100%'}/>
        </Box>

        <Stack width={{md: '50%', xs: '100%'}} spacing={2} justifyContent='center' alignItems={'center'}>
          <TextField variant='outlined' label='Firstname' sx={{ width: {md: '70%', xs: '100%'} }} />
          <TextField variant='outlined' label='Lastname' sx={{ width: {md: '70%', xs: '100%'} }} />
          <TextField variant='outlined' label="What's your email" sx={{ width: {md: '70%', xs: '100%'} }} />
          <TextField variant='outlined' multiline label="Your Question..." sx={{ width: {md: '70%', xs: '100%'} }} rows={3} />
          <Button variant='contained' sx={{width: {md: '70%', xs: '100%'}}}>Send Message</Button>
        </Stack>
      </Box>
    </Container>
  )
}
