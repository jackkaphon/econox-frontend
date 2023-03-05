import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import Img from '../images/bottle_recycle.webp'

export default function StoryItem() {
    return (
        <Box display={'flex'} mt={5} flexDirection={{md: 'row', xs: 'column'}}>
            <Box flex={1} display='flex' alignItems={{md: 'flex-end', xs: 'center'}} flexDirection='column' pr={{md: 5, xs: 0}}>
                <Typography variant='h3'>1995</Typography>
                <img src={Img} alt='' width={'70%'} />
            </Box>

            <Divider flexItem orientation="vertical" />

            <Box flex={1} pl={{md: 5, xs: 0}} display='flex' alignItems={'center'} textAlign='center'>
                <Typography variant='h6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </Typography>
            </Box>
        </Box>
    )
}
