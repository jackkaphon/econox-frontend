import React from 'react'
import { Container, Typography } from '@mui/material'
import StoryItem from '../components/StoryItem'

export default function Story() {
  const item = [1, 2, 3, 4, 5]
  return (
    <Container maxWidth='xl'>
      <Typography variant='h3' align='center'>Our Story</Typography>

      {item.map(rows =>
        <StoryItem key={rows}/>
      )}
    </Container>
  )
}
