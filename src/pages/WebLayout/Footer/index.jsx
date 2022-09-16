import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import RemoveIcon from '@mui/icons-material/Remove';
import './style.scss'

function Footer(){

    return (
        <div  id="footer">
            <Container maxWidth="md" className="menu_section">
                <Grid container spacing={2} columns={16} className="">
                    <Grid item sm={4}>
                        <Typography
                            variant="h5"
                            component="a"
                            href="/"
                            className="logo"
                        >
                            ADZWALL
                        </Typography>
                        <Typography className="grey_title">
                            Adzwall LLC <br/>
                            info@adzwall.com
                        </Typography>
                    </Grid>
                    <Grid item sm={4}>
                        <Typography
                            variant="h5"
                            className="grey_title"
                        >
                            Menu
                        </Typography>
                        <List >
                            <ListItem component="a"
                                      href="/" disablePadding>
                                <RemoveIcon />&nbsp;
                                <ListItemText primary="Adz" />
                            </ListItem>
                            <ListItem component="a"
                                      href="/" disablePadding>
                                <RemoveIcon />&nbsp;
                                <ListItemText primary="Smth more" />
                            </ListItem>
                            <ListItem component="a"
                                      href="/" disablePadding>
                                <RemoveIcon />&nbsp;
                                <ListItemText primary="and again" />
                            </ListItem>
                            <ListItem component="a"
                                      href="/" disablePadding>
                                <RemoveIcon />&nbsp;
                                <ListItemText primary="and so on" />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item sm={4}>
                        <Typography
                            variant="h5"
                            className="grey_title"
                        >
                            Legel
                        </Typography>
                        <List >
                            <ListItem component="a"
                                      href="/" disablePadding>
                                <RemoveIcon />&nbsp;
                                <ListItemText primary="Terms & Conditions" />
                            </ListItem>
                            <ListItem component="a"
                                      href="/" disablePadding>
                                <RemoveIcon />&nbsp;
                                <ListItemText primary="Contact Us" />
                            </ListItem>

                        </List>
                    </Grid>
                    <Grid item sm={4}>
                        <Typography
                            variant="h5"
                            className="grey_title"
                        >
                            Social
                        </Typography>
                        <List >
                            <ListItem component="a"
                                      href="/" disablePadding>
                                <RemoveIcon />&nbsp;
                                <ListItemText primary="Instagram" />
                            </ListItem>
                            <ListItem component="a"
                                      href="/" disablePadding>
                                <RemoveIcon />&nbsp;
                                <ListItemText primary="Linkedin" />
                            </ListItem>

                        </List>
                    </Grid>
                </Grid>
                <div className="hr_line" />
                <Grid container spacing={2} columns={16}>
                    <Grid item sm={16} className="copyRight">
                        All Rights Reserved.
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default Footer;