import React from 'react'
import { Dialog, DialogTitle, TextField, DialogContent, DialogActions, Button, Stack } from '@mui/material'

export default function SignUpDialog(props) {
    return (
        <Dialog open={props.open} onClose={props.handleClose} maxWidth='sm' fullWidth>
            <DialogTitle>Sign Up</DialogTitle>
            <DialogContent>
                <Stack direction={'column'} spacing={2} paddingTop={2}>
                    <TextField label='username'/>
                    <TextField label='firstname'/>
                    <TextField label='lastname'/>
                    <TextField label='email'/>
                    <TextField label='password' />
                    <TextField label='confirm password' />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button color='success'>Sign up</Button>
                <Button >Sign in</Button>
            </DialogActions>
        </Dialog>
    )
}
