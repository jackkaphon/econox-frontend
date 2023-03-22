import React from 'react'
import { Avatar, Container, Box, Typography, TextField, MenuItem } from '@mui/material'

export default function Profile() {
    const data = [
        { id: 1, title: 'Username', label: 'username' },
        { id: 1, title: 'Email', label: 'email' },
        { id: 1, title: 'Password', label: 'password' },
        { id: 1, title: 'Firstname', label: 'firstname' },
        { id: 1, title: 'Lastname', label: 'lastname' },
    ]
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

            <Box paddingTop={10}>
                <Typography variant='h4'>Account</Typography>

                {data.map(rows =>
                    <Box display={'flex'} alignItems='center' p={2}>
                        <Box flex={1}>
                            <Typography variant='h6'>{rows.title}</Typography>
                        </Box>
                        <Box flex={2}>
                            <TextField fullWidth variant='outlined' label={rows.label} value={''} />
                        </Box>
                    </Box>
                )}

                <Box display={'flex'} alignItems='center' p={2}>
                    <Box flex={1}>
                        <Typography variant='h6'>Language</Typography>
                    </Box>
                    <Box flex={2}>
                        <TextField fullWidth variant='outlined' label={'choose'} select >
                            <MenuItem>Lao</MenuItem>
                            <MenuItem>Thai</MenuItem>
                            <MenuItem>English</MenuItem>
                            <MenuItem>Chinese</MenuItem>
                        </TextField>
                    </Box>
                </Box>
            </Box>

        </Container>
    )
}
