import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import StarIcon from '@mui/icons-material/Star';

function Review(){
    return (
        <ListItem sx={{my:3, py:3, borderRadius:'8px', boxShadow:'inset 0px 0px 0px 1px #E6E8F0;'}} alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Great company, providing an awesome"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{lineHeight:'28px', display:'inline-flex'}}
                                component="span"
                                variant="span"
                            >
                            <StarIcon />

                            <Typography
                                component="b"
                                variant="b"
                            >
                                4.5/5
                            </Typography>
                                <Typography
                                    component="span"
                                    variant="span"
                                    sx={{lineHeight:'10px', fontSize:'30px', pl:"10px"}}
                                >
                                    .
                                </Typography>
                            <Typography
                                component="b"
                                variant="b"
                                pl={2}
                            >
                                Jane Rotanson
                            </Typography>
                                <Typography
                                    component="span"
                                    variant="span"
                                    sx={{lineHeight:'10px', fontSize:'30px', pl:"10px", pr:2}}
                                >
                                    .
                                </Typography>
                            {"2w"}
                            </Typography>
                            <Typography  component="h5"
                                         variant="h5" sx={{pt:2}}>Huge coverage!!
                            </Typography>
                        </React.Fragment>
                    }

                />

        </ListItem>

    )
}
export default Review