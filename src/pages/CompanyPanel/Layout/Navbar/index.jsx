import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Outlet} from 'react-router-dom';
import {Link as RouterLink, NavLink} from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PieChartIcon from '@mui/icons-material/PieChart';
import EmailIcon from '@mui/icons-material/Email';
import StoreIcon from '@mui/icons-material/Store';
import './style.scss'
import TopMenu from '../../../../components/TopMenu'


const drawerWidth = 240;

function Navbar() {
    const [openAdz, setOpenAdz] = React.useState(false);
    const handleAdzMenu = () => {
        setOpenAdz(!openAdz);
    }
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                sx={{width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`}}
                id="headerMenu"
            >
                <Toolbar>
                    <TopMenu/>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,


                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        background: '#111827',
                        px: 2,
                    },
                }}
                variant="permanent"
                anchor="left"
                id="sidebar"
            >
                <Typography
                    variant="h6"
                    noWrap
                    to="/" component={RouterLink}
                    className="logo"
                    sx={{
                        mr: 2,
                        display: {xs: 'none', md: 'flex'},
                    }}
                >
                    ADZWALL
                </Typography>
                <Divider/>
                <List sx={{color: '#fff'}}>
                    <ListItem className="company_box" disablePadding>
                        <ListItemButton sx={{cursor:'auto'}}>
                            <ListItemText primary="Bullzeye LLC" secondary="Your tier: Premium"/>
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider/>
                <List sx={{color: '#D1D5DB'}}>
                    <ListItem key="Overview" disablePadding>
                        <NavLink to="overview">
                            <ListItemButton>
                                <ListItemIcon><HomeIcon/></ListItemIcon>
                                <ListItemText primary="Overview"/>
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                    <ListItem key="Account" disablePadding>
                        <NavLink to="account">
                            <ListItemButton>
                                <ListItemIcon><AccountCircleIcon/></ListItemIcon>
                                <ListItemText primary="Account"/>
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                    <ListItem key="Finance" disablePadding>
                        <ListItemButton onClick={handleAdzMenu}>
                            <ListItemIcon>
                                <SignalCellularAltIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Adz"/>
                            {openAdz ? <ExpandLess/> : <ExpandMore/>}
                        </ListItemButton>
                    </ListItem>
                    <Collapse in={openAdz} timeout="auto" unmountOnExit>
                        <List component="div" sx={{ml: 2}} disablePadding>
                            <ListItem key="create" disablePadding>
                                <NavLink to="ad/create">
                                    <ListItemButton sx={{pl: 4}}>
                                        <ListItemText primary="Create"/>
                                    </ListItemButton>
                                </NavLink>
                            </ListItem>
                            <ListItem key="list" disablePadding>
                                <NavLink to="ad/list">
                                    <ListItemButton sx={{pl: 4}}>
                                        <ListItemText primary="Show"/>
                                    </ListItemButton>
                                </NavLink>
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem key="Finance" disablePadding>
                        <NavLink to="finance">
                        <ListItemButton>
                            <ListItemIcon><PieChartIcon/></ListItemIcon>
                            <ListItemText primary="Finance"/>
                        </ListItemButton>
                        </NavLink>

                    </ListItem>
                    <ListItem key="Finance" disablePadding>
                        <NavLink to="messages">
                        <ListItemButton>
                            <ListItemIcon><EmailIcon/></ListItemIcon>
                            <ListItemText primary="Messages"/>
                        </ListItemButton>
                        </NavLink>
                    </ListItem>
                    <ListItem key="Store" disablePadding>
                        <NavLink to="store">
                        <ListItemButton>
                            <ListItemIcon><StoreIcon/></ListItemIcon>
                            <ListItemText primary="Store"/>
                        </ListItemButton>
                        </NavLink>
                    </ListItem>
                </List>

            </Drawer>
            <Box
                component="main"
                sx={{flexGrow: 1, bgcolor: 'background.default', background: '#F9FAFC'}}
            >
                <Toolbar/>
                <Outlet/>
            </Box>
        </Box>
    );
}

export default Navbar;