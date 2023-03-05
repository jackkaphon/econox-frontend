import React from 'react'
import { Avatar, Container, Box, Typography } from '@mui/material'

export default function Profile() {
    return (
        <Container maxWidth='xl'>
            <Box display='flex'>
                <Box flex={1}>
                    <Avatar sx={{ width: 200, height: 200, fontSize: 60 }}>J</Avatar>
                </Box>
                <Box flex={3}>
                    <Typography variant='h4'>Jackkaphon Venevankham</Typography>
                    <Typography variant='body1'>jackwchh@gmail.com</Typography>
                </Box>
            </Box>

        </Container>
    )
}
