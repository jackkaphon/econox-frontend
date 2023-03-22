import React from 'react'
import { Container, Typography } from '@mui/material'
import StoryItem from '../components/StoryItem'

import BottleRecycleImg from '../images/bottle_recycle.webp'
import GlobalWarmingImg from '../images/global_warming.jpeg'
import MaterialReuseImg from '../images/material_reuse.jpeg'
import SaveWaterImg from '../images/save_water.jpeg'

export default function Story() {
  const item = [
    { id: 1, title: 'Bottle Recycle', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat', img: BottleRecycleImg, year: 1995, reversed: false },
    { id: 2, title: 'Material Reuse', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat', img: MaterialReuseImg, year: 2000, reversed: true },
    { id: 3, title: 'Reduce Global Warming', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat', img: GlobalWarmingImg, year: 2005, reversed: false },
    { id: 4, title: 'Save Water', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat', img: SaveWaterImg, year: 2010, reversed: true },
  ]
  return (
    <Container maxWidth='xl'>
      <Typography variant='h3' align='center'>Our Story</Typography>

      {item.map(rows =>
        <StoryItem
          key={rows.id}
          description={rows.description}
          year={rows.year}
          img={rows.img}
          reversed={rows.reversed}
        />
      )}
    </Container>
  )
}
