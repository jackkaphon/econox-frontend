import React, { useState } from 'react'
import { Dialog, DialogTitle, TextField, DialogContent, DialogActions, Button, Stack } from '@mui/material'
import axios from 'axios'

export default function SignUpDialog(props) {
    const [signUpData, setsignUpData] = useState({})

    const handleOpenSignUp = () => {
        props.setopenSignUpDiag(false)
        props.setopenSignInDiag(true)
    }

    const handleSignUp = () => {
        // if (signUpData.password === signUpData.con_password) {
        axios({
            url: window.$api + '/register',
            method: 'post',
            data: signUpData
        }).then(res => {
            alert(res.data)
            setsignUpData({})
            props.setopenSignUpDiag(false)
        })
        // } else {
        //     alert('Passwords are not matched')
        // }

    }

    const handleChange = (e) => {
        setsignUpData({
            ...signUpData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Dialog open={props.open} onClose={props.handleClose} maxWidth='sm' fullWidth>
            <DialogTitle>Sign Up</DialogTitle>
            <DialogContent>
                <Stack direction={'column'} spacing={2} paddingTop={2}>
                    <TextField
                        label='username'
                        name='username'
                        value={signUpData.username || ""}
                        onChange={handleChange}
                    />
                    <TextField
                        label='firstname'
                        name='firstname'
                        onChange={handleChange}
                        value={signUpData.firstname || ""}
                    />
                    <TextField
                        label='lastname'
                        name='lastname'
                        onChange={handleChange}
                        value={signUpData.lastname || ""}
                    />
                    <TextField
                        label='email'
                        name='email'
                        onChange={handleChange}
                        value={signUpData.email || ""}
                    />
                    <TextField
                        label='password'
                        name='password'
                        onChange={handleChange}
                        value={signUpData.password || ""}
                    />
                    <TextField
                        label='confirm password'
                        name='con_password'
                        onChange={handleChange}
                        value={signUpData.con_password || ""}
                    />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button color='success' onClick={handleSignUp}>Sign up</Button>
                <Button onClick={handleOpenSignUp}>Sign in</Button>
            </DialogActions>
        </Dialog>
    )
}
