import React, { useState, useContext } from 'react'
import { Dialog, DialogTitle, TextField, DialogContent, DialogActions, Button, Stack } from '@mui/material'
import axios from 'axios'
import { userContext } from '../routes/index.jsx'

export default function SignInDialog(props) {
    const [signInData, setsignInData] = useState({})
    const { setuserInfo } = useContext(userContext)

    const handleOpenSignUp = () => {
        props.setopenSignInDiag(false)
        props.setopenSignUpDiag(true)
    }

    const handleSignIn = () => {
        axios({
            url: window.$api + '/login',
            method: 'post',
            withCredentials: true,
            data: signInData
        }).then(res => {
            switch (res.data.status) {
                case 200:
                    setsignInData({})
                    props.setopenSignInDiag(false)
                    props.setisLoggedIn(true)
                    setuserInfo(res.data.data)
                    break;
                case 409:
                    alert(res.data.msg)
                    break;
                case 404:
                    alert(res.data.msg)
                    break;
                default:
                    alert('Login failed')
                    break;
            }
        })
    }

    const handleChange = (e) => {
        setsignInData({
            ...signInData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <Dialog onClose={props.handleClose} open={props.open} maxWidth='sm' fullWidth>
            <DialogTitle>Sign In</DialogTitle>
            <DialogContent>
                <Stack direction={'column'} spacing={2} paddingTop={2}>
                    <TextField
                        label='email'
                        name='email'
                        onChange={handleChange}
                        value={signInData.email || ""}
                    />
                    <TextField
                        label='password'
                        name='password'
                        type='password'
                        onChange={handleChange}
                        value={signInData.password || ""}
                    />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button color='success' onClick={handleSignIn}>Sign in</Button>
                <Button onClick={handleOpenSignUp}>Sign up</Button>
            </DialogActions>
        </Dialog>
    )
}
