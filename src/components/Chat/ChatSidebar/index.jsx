import React, {useState} from 'react';
import {
    Container,
    Grid,
    Typography,
    Box,
    Divider,
    Avatar,
    List,
    IconButton,
    Drawer,
    useMediaQuery

} from '@mui/material'

import UserList from '../UserList'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';


const ChatSidebarDesktop = styled(Drawer)({
    flexShrink: 0,
    width: 380,
    '& .MuiDrawer-paper': {
        position: 'relative',
        width: 380
    }
});

const ChatSidebarMobile = styled(Drawer)({
    maxWidth: '100%',
    width: 380,
    '& .MuiDrawer-paper': {
        height: 'calc(100% - 64px)',
        maxWidth: '100%',
        top: 64,
        width: 380
    }
});

export const ChatSidebar = (props) => {
    const { users, openedUser, setOpenedUser, open, onClose, containerRef, ...other } = props;
    const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));


    const handleClose = () => {
        setOpenedUser({})
    }

    const content =  (
        <div>
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    p: 2
                }}
            >
            <Typography component="h1"
                        variant="h1"
            >Chats
            </Typography>
                {openedUser?.id &&
                <React.Fragment>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            ml: 2,
                            right:0
                        }}
                    >
                        <CloseRoundedIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>
                }
            </Box>

            <Divider/>
            <List disablePadding>
                { users?.length > 0 &&
                users?.map((user, index) =>
                    <UserList
                        user={user}
                        openedUser={openedUser}
                        setOpenedUser={setOpenedUser}
                    />
                )}
            </List>

        </div>
    )

    if (mdUp) {
        return (
            <ChatSidebarDesktop
                anchor="left"
                open={open}
                SlideProps={{ container: containerRef?.current }}
                variant="persistent"
                {...other}>
                {content}
            </ChatSidebarDesktop>
        );
    }

    return (
        <ChatSidebarMobile
            anchor="left"
            ModalProps={{ container: containerRef?.current }}
            onClose={onClose}
            open={open}
            SlideProps={{ container: containerRef?.current }}
            variant="temporary"
            {...other}>
            {content}
        </ChatSidebarMobile>
    );
}



ChatSidebar.propTypes = {
    containerRef: PropTypes.any,
    onClose: PropTypes.func,
    open: PropTypes.bool
};
export default ChatSidebar;
