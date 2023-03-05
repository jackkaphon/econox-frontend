import React from 'react'
import Card from '../components/Card'
import { Container, Typography, Box } from '@mui/material'

export default function Project() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <Container maxWidth='xl' sx={{ pt: 10 }}>
      <Typography align='center' variant='h3'>Our Projects</Typography>

      <Box sx={{ mt: 5, }} display='flex' justifyContent='space-between' flexWrap='wrap'>
        {data.map(rows =>
          <Box mt={5} key={rows}>
            <Card />
          </Box>
        )}
      </Box>
    </Container>
  )
}
