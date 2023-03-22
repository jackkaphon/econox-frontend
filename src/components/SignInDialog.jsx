import React, { useState } from 'react'
import { Dialog, DialogTitle, TextField, DialogContent, DialogActions, Button, Stack } from '@mui/material'
import axios from 'axios'

export default function SignInDialog(props) {
    const [signInData, setsignInData] = useState({})

    const handleOpenSignUp = () => {
        props.setopenSignInDiag(false)
        props.setopenSignUpDiag(true)
    }

    const handleSignIn = () => {
        axios({
            url: 'http://localhost:3001/login',
            method: 'post',
            data: signInData
        }).then(res => {
            console.log(res.data)
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
