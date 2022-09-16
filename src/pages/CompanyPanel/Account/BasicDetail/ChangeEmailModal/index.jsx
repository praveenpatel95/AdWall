import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function ChangeEmailModal({changeEmailModal, setChangeEmailModal}) {
    const handleClose = () => {
        setChangeEmailModal(false);
    };

    const handleEmailChange = () => {

    }

    return (
        <Dialog
            open={changeEmailModal}
            onClose={handleClose}
            fullWidth={true}
            maxWidth={'xs'}
            onClose="backdropClick"
        >
            <Box sx={{p: 2}}>
                <DialogTitle>
                    Change email address
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 28,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon/>
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <TextField fullWidth
                               label="Email address"
                               placeholder="New email address"
                               margin="dense"
                               autoFocus
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => handleEmailChange()} color="success" size="medium"
                            variant="contained" autoFocus>
                        Change
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    )
}

export default ChangeEmailModal;