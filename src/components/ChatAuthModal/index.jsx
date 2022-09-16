import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from 'react-router-dom';


function ChatAuthModal({chatModal, setChatModal}){
    const handleClose = () => {
        setChatModal(false);
    };

    return (
        <Dialog
            open={chatModal}
            onClose={handleClose}
            contentStyle={{ padding: '50px' }}
        >
            <DialogTitle>
                To chat with this customer you need to sign-up
            </DialogTitle>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button to="/register" component={RouterLink} onClick={handleClose} color="success" size="medium"
                        variant="contained" endIcon={<ArrowForwardIcon />} autoFocus>
                    Sing Up
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ChatAuthModal;