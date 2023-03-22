import React from 'react'
import Card from '../components/Card'
import { Container, Typography, Box } from '@mui/material'
import BottleRecycleImg from '../images/bottle_recycle.webp'
import GlobalWarmingImg from '../images/global_warming.jpeg'
import MaterialReuseImg from '../images/material_reuse.jpeg'
import SaveWaterImg from '../images/save_water.jpeg'

export default function Project() {
  const data = [
    {id: 1, title: 'Bottle Recycle', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat', img: BottleRecycleImg},
    {id: 2, title: 'Material Reuse', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat', img: MaterialReuseImg},
    {id: 3, title: 'Reduce Global Warming', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat', img: GlobalWarmingImg},
    {id: 4, title: 'Save Water', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat', img: SaveWaterImg},
  ]
  return (
    <Container maxWidth='xl' sx={{ pt: 10 }}>
      <Typography align='center' variant='h3'>Our Projects</Typography>

      <Box sx={{ mt: 5, }} display='flex' justifyContent='space-between' flexWrap='wrap'>
        {data.map(rows =>
          <Box mt={5} key={rows}>
            <Card 
              key={rows.id}
              title={rows.title}
              description={rows.description}
              img={rows.img}
            />
          </Box>
        )}
      </Box>
    </Container>
  )
}
