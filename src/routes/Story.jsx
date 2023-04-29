import React, {useEffect, useState} from 'react'
import { Container, Typography } from '@mui/material'
import StoryItem from '../components/StoryItem'
import axios from 'axios'

export default function Story() {
  const [storiesData, setstoriesData] = useState([])
  useEffect(() => {
    axios({
      url: window.$api + '/stories',
      method: 'get'
    }).then(res => {
      let newArr = [...res.data]
      let reverseValue = false
      newArr.forEach((el) => {
        if(reverseValue) {
          el.reversed = false
          reverseValue = false
        }else{
          el.reversed = true
          reverseValue = true
        }
      })
      setstoriesData(newArr)
    })
  }, [])
  
  return (
    <Container maxWidth='xl'>
      <Typography variant='h3' align='center'>Our Story</Typography>

      {storiesData.map(rows =>
        <StoryItem
          key={rows.id}
          description={rows.storyDescription}
          year={rows.storyStartedYear}
          img={rows.storyImg}
          reversed={rows.reversed}
        />
      )}
    </Container>
  )
}
