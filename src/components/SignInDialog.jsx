import React from 'react'
import { Dialog, DialogTitle, TextField, DialogContent, DialogActions, Button, Stack } from '@mui/material'

export default function SignInDialog(props) {
    const handleOpenSignUp = () => {
        props.setopenSignInDiag(false)
        props.setopenSignUpDiag(true)
    }
    return (
        <Dialog onClose={props.handleClose} open={props.open} maxWidth='sm' fullWidth>
            <DialogTitle>Sign In</DialogTitle>
            <DialogContent>
                <Stack direction={'column'} spacing={2} paddingTop={2}>
                    <TextField label='email'/>
                    <TextField label='password' />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button color='success'>Sign in</Button>
                <Button onClick={handleOpenSignUp}>Sign up</Button>
            </DialogActions>
        </Dialog>
    )
}
