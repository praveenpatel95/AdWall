import React, {useState, useRef} from 'react';
import {
    Container,
    Grid,
    Typography,
    Box,
    Divider,
    Avatar,
    List,
    IconButton

} from '@mui/material'
import { styled } from '@mui/material/styles';

import Helmet from 'react-helmet'
import ForumIcon from '@mui/icons-material/Forum';
import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';

import ChatSidebar from '../../../components/Chat/ChatSidebar'
import ChatThread from '../../../components/Chat/ChatThread'
import ChatComposer from '../../../components/Chat/ChatComposer'

const ChatInner = styled('div',
    { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        overflow: 'hidden',
        [theme.breakpoints.up('md')]: {
            //marginLeft: -380
        },
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        ...(open && {
            [theme.breakpoints.up('md')]: {
               // marginLeft: 0
            },
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            })
        })
    }));

function Messages() {
    const rootRef = useRef(null);

    const users = [
        {
            id: 1,
            name: 'Prem Patel',
            title: 'll be in your neighborhood…',
            time: '1h',
            count: 0,
            image: '/static/images/avatar/1.jpg'
        },
        {
            id: 2,
            name: 'Helina Brow',
            title: 'Sent a photo',
            time: '3 sep',
            count: 2,
            image: process.env.PUBLIC_URL + '/assets/images/avtar.png'
        }
    ];



    const [openedUser, setOpenedUser] = useState({});

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleToggleSidebar = () => {
        setIsSidebarOpen((prevState) => !prevState);
    };

    const handleCloseSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>Messages</title>
            </Helmet>
            <Box
                component="main"
                sx={{
                    position: 'relative',
                    height: '100%',
                    width: '100%',
                    overflow: 'hidden'
                }}
            >

                <Box
                    ref={rootRef}
                    sx={{
                        display: 'flex',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }}
                >
                {isSidebarOpen &&

                    <ChatSidebar
                        containerRef={rootRef}
                        open={isSidebarOpen}
                        onClose={handleCloseSidebar}
                        users={users}
                        openedUser={openedUser}
                        setOpenedUser={setOpenedUser}
                    />

                }
                    <ChatInner open={isSidebarOpen}>
                    <Box
                        sx={{
                            alignItems: 'center',
                            backgroundColor: 'background.paper',
                            borderBottomColor: 'divider',
                            borderBottomStyle: 'solid',
                            borderBottomWidth: 1,
                            display: 'flex',
                            p: 2
                        }}
                    >
                        <IconButton onClick={handleToggleSidebar}>
                            <DragHandleRoundedIcon fontSize="small"/>
                        </IconButton>
                    </Box>

                    {openedUser?.id ?
                       <Box>
                           <ChatThread user={openedUser}/>
                           <ChatComposer />
                       </Box>
                        :
                        <Box
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                flexGrow: 1,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                overflow: 'hidden',

                            }}
                            style={{minHeight: '70vh'}}

                        >

                            <Avatar sx={{bgcolor: 'success.main'}}><ForumIcon/></Avatar>
                            <Typography
                                color="textSecondary"
                                sx={{mt: 2}}
                                variant="subtitle1"
                            >
                                Start meaningful conversations!
                            </Typography>
                        </Box>
                    }
                    </ChatInner>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Messages;