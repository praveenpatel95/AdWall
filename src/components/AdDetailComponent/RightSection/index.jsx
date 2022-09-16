import React, {useEffect, useState} from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';


function RightSection() {

    return (
        <Box>
            <Typography component="h4" sx={{textTransform: 'uppercase'}}>
                About
            </Typography>
            <List sx={{p: '0'}}>
                <ListItem disablePadding>
                    <ListItemAvatar>
                        <Avatar variant="rounded">
                            <img src={process.env.PUBLIC_URL + '/assets/images/ad-demo.jpg'}/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={(<h4>Augmastic Inc.</h4>)}/>
                </ListItem>
            </List>

            <Typography variant="h6" pb={1}>
                Price
            </Typography>
            <Typography variant="h4">
                1234 $ • <Typography variant="caption">monthly</Typography>
            </Typography>

            <Typography variant="h6" pt={2} pb={1}>
                Website
            </Typography>
            <Link underline="none">https://augmastic.dev</Link>

            <Typography variant="h6" pt={2} pb={1}>
                Locations
            </Typography>
            <Typography variant="p" component="p">
                Poland (Wroclaw, Warshaw, Krakow)
            </Typography>

            <Typography variant="h6" pt={2} pb={1}>
                Coverage
            </Typography>
            <Typography variant="p" component="p">
                3000 - 4000 views • daily
            </Typography>

            <Typography variant="h6" pt={2} pb={1}>
                Outdoor
            </Typography>
            <Stack direction="row" spacing={1}>
                <Chip label="Banner" color="success" />
                <Chip label="Banner1" color="success" />
            </Stack>

            <Typography variant="h6" pt={2} pb={1}>
                Point-of-Sale
            </Typography>
            <Stack direction="row" spacing={1}>
                <Chip label="Displays" color="success" />
                <Chip label="Window-stickers" color="success" />
            </Stack>
        </Box>
    )
}

export default RightSection;