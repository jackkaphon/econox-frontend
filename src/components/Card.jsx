import React from 'react'
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material'

export default function ProjectCard(props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component='img'
                height="140"
                image={window.$api + '/image/' + props.img}
            />
            <CardContent>
                <Typography variant='h5' gutterBottom>{props.title}</Typography>
                <Typography variant="body2">
                    {props.description.substring(0, 220)} {props.description.length > 220 ? '...' : null}
                </Typography>
            </CardContent>
            <Button>Info</Button>
        </Card>
    )
}
