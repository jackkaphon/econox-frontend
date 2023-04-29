import React, {useEffect, useContext, useState} from 'react'
import { Avatar, Container, Box, Typography, TextField, MenuItem, Button } from '@mui/material'
import { userContext } from './index'
import axios from 'axios'

export default function Profile() {
    const { userInfo } = useContext(userContext)
    const [userProfileData, setuserProfileData] = useState([]) // {}    
    const [userProfileinfo, setuserProfileinfo] = useState({})

    useEffect(() => {
        axios({
            url: window.$api + '/users/' + userInfo.id,
            method: 'get',
        }).then(res => {
            setuserProfileinfo(res.data[0])
            setuserProfileData([
                { id: 1, title: 'Username', label: 'username', value: res.data[0]?.username },
                { id: 2, title: 'Email', label: 'email', value: res.data[0]?.email },
                { id: 3, title: 'Firstname', label: 'firstname', value: res.data[0]?.firstname },
                { id: 4, title: 'Lastname', label: 'lastname', value: res.data[0]?.lastname },
            ])
        })
    }, [userInfo.id])

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        let arr = [...userProfileData]
        
        arr.forEach((row, index) => {
            if (row.label == name) {
                row.value = value
            }
        })

        setuserProfileData(arr)
    }

    const handleUpdate = () => {
        axios({
            url: window.$api + '/users/' + userInfo.id,
            method: 'put',
            data: {
                username: userProfileData[0].value,
                email: userProfileData[1].value,
                firstname: userProfileData[2].value,
                lastname: userProfileData[3].value,
            }
        }).then(res => {
            alert(res.data)
        })
    }

    return (
        <Container maxWidth='xl'>
            <Box display='flex'>
                <Box flex={1}>
                    <Avatar sx={{ width: 200, height: 200, fontSize: 60 }} src={window.$api + '/image/' + userInfo.img} alt='' />
                </Box>
                <Box flex={3}>
                    <Typography variant='h4'>{userProfileinfo?.firstname} {userProfileinfo?.lastname}</Typography>
                    <Typography variant='body1'>{userProfileinfo?.email}</Typography>
                </Box>
            </Box>

            <Box paddingTop={10}>
                <Typography variant='h4'>Account</Typography>
                <Button variant='contained' onClick={handleUpdate}>Update</Button>

                {userProfileData.map(rows =>
                    <Box display={'flex'} alignItems='center' p={2} key={rows.id}>
                        <Box flex={1}>
                            <Typography variant='h6'>{rows.title}</Typography>
                        </Box>
                        <Box flex={2}>
                            <TextField 
                                fullWidth 
                                variant='outlined' 
                                name={rows.label} 
                                label={rows.label} 
                                value={rows.value || ""} 
                                onChange={handleChange}
                                />
                        </Box>
                    </Box>
                )}

                {/* <Box display={'flex'} alignItems='center' p={2}>
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
                </Box> */}
            </Box>

        </Container>
    )
}
