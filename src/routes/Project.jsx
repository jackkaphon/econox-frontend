import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { Container, Typography, Box } from '@mui/material'
import axios from 'axios'

export default function Project() {
  const [projectData, setprojectData] = useState([])

  useEffect(() => {
    axios({
      url: window.$api + '/projects',
      method: 'GET'
    }).then(res => {
      setprojectData(res.data)
    })
  }, [])

  return (
    <Container maxWidth='xl' sx={{ pt: 10 }}>
      <Typography align='center' variant='h3'>Our Projects</Typography>

      <Box sx={{ mt: 5, }} display='flex' justifyContent='space-between' flexWrap='wrap'>
        {projectData.map(rows =>
          <Box mt={5} key={rows.id}>
            <Card
              title={rows.projectName}
              description={rows.projectDescription}
              img={rows.projectImg}
            />
          </Box>
        )}
      </Box>
    </Container>
  )
}
