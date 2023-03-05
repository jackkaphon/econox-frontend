import React from 'react'
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material'
import Img from '../images/bottle_recycle.webp'

export default function ProjectCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component='img'
                height="140"
                image={Img}
            />
            <CardContent>
                <Typography variant='h5' gutterBottom>Bottle Recycle</Typography>
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </Typography>
            </CardContent>
            <Button>Info</Button>
        </Card>
    )
}
