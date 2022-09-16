import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import GroupIcon from '@mui/icons-material/Group';
import GradeIcon from '@mui/icons-material/Grade';
import { Link as RouterLink } from 'react-router-dom';

function AdCard(){
    return (
        <Card sx={{ maxWidth: 345 }} >
            <Link to="/ad/my-ad" component={RouterLink}
                  color="inherit" underline="none"
            >
            <CardMedia
                component="img"
                height="194"
                image={`${process.env.PUBLIC_URL}/assets/images/ad-demo.jpg`}
                alt="Paella dish"
            />
            <CardHeader
                avatar={
                    <Avatar alt="Remy Sharp" src={`${process.env.PUBLIC_URL}/assets/images/avtar.png`} />
                }
                title={(<Typography component="h4">Mella full screen slider</Typography>)}
                subheader={(<small>By <b>Jhone</b> | updated 5 hours ago</small>)}
            />
            <CardContent sx={{py:"5px"}}>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas.
                </Typography>
                <List sx={{ pt: 2}}>
                      <ListItem sx={{p:0}}>
                        <ListItemText primary="$6,125.00" secondary="Budget"/>
                        <ListItemText primary="Europe" secondary="Location"/>
                        <ListItemText primary="Advertiser" secondary="&nbsp;"/>
                    </ListItem>
                </List>

            </CardContent>

            <div className="hr"></div>
            <CardActions sx={{padding: '5px 20px 3px 8px'}}>
                <Grid container >
                    <Grid item sm={6} sx={{lineHeight:'28px', display:'inline-flex'}}>
                            <GroupIcon />&nbsp;&nbsp;2
                    </Grid>
                    <Grid item sm={6}>
                        <Typography align="right">
                            <GradeIcon />
                            <GradeIcon />
                            <GradeIcon />
                            <GradeIcon />
                            <GradeIcon />
                        </Typography>
                    </Grid>
                </Grid>

            </CardActions>
            </Link>
        </Card>
    )
}

export default AdCard;