import React, {useRef, useState} from 'react';
import {
    Box,
    Avatar,
    Typography,
    IconButton,
    MenuItem,
    ListItemIcon,
    Menu,
    ListItemText,
    Tooltip


} from '@mui/material'
import ReportIcon from '@mui/icons-material/Report';
import BlockIcon from '@mui/icons-material/Block';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function ChatThreadToolbar(props){
    const {user} = props;

    const moreRef = useRef(null);
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenuOpen = () => {
        setOpenMenu(true);
    };

    const handleMenuClose = () => {
        setOpenMenu(false);
    };

    return (
        <Box
            sx={{
                alignItems: 'center',
                backgroundColor: 'background.paper',
                borderBottomColor: 'divider',
                borderBottomStyle: 'solid',
                borderBottomWidth: 1,
                display: 'flex',
                flexShrink: 0,
                minHeight: 64,
                px: 2,
                py: 1
            }}>
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex'
                }}
            >
                <Avatar
                    src={user?.image}
                />
                <Box sx={{ ml: 2 }}>
                    <Typography variant="subtitle2">
                        {user?.name}
                    </Typography>
                    {/*{Boolean(recipients.length === 1 && recipients[0].lastActivity) && (*/}
                    {/*    <Typography*/}
                    {/*        color="textSecondary"*/}
                    {/*        variant="caption"*/}
                    {/*    >*/}
                    {/*        Last active*/}
                    {/*        {' '}*/}
                    {/*        {formatDistanceToNowStrict(recipients[0].lastActivity, { addSuffix: true })}*/}
                    {/*    </Typography>*/}
                    {/*)}*/}
                    <Typography  variant="caption">
                        Last active
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton>
                <ReportIcon fontSize="small" />
            </IconButton>
            <Tooltip title="More options">
                <IconButton
                    onClick={handleMenuOpen}
                    ref={moreRef}
                >
                    <MoreVertIcon fontSize="small" />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={moreRef.current}
                keepMounted
                onClose={handleMenuClose}
                open={openMenu}
            >
                <MenuItem>
                    <ListItemIcon>
                        <BlockIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Block contact" />
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <DeleteIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Delete chat" />
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <ArchiveIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Archive thread" />
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <NotificationsOffIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Mute notifications" />
                </MenuItem>
            </Menu>
        </Box>
    )
}

export default ChatThreadToolbar;
