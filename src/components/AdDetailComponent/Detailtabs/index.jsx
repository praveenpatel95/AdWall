import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Rating from '@mui/material/Rating';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Review from './Review';

function Detailtabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <TabContext value={value} >
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <TabList onChange={handleChange}
                         aria-label="lab API tabs example">
                    <Tab label="Overview" value="1"/>
                    <Tab label="Requirements" value="2"/>
                    <Tab label="Reviews" value="3"/>
                </TabList>
            </Box>
            <TabPanel value="1"  sx={{padding:'0px'}}>
                <h3>Huge IT-park offers it’s place for indoor advertisment</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.</p>
                <Divider />
                <Typography component="h4" variant="h4" py={2}>More adz from this Advertiser/Distributor</Typography>
                <List sx={{boxShadow:'inset 0px 0px 0px 1px #E6E8F0;', borderRadius:'8px'}}>
                    <ListItem >
                        <ListItemText primary="Best place for your ad in the entire world"
                                      secondary="Belgium, Spain • Budget • $100"/>
                        <Typography variant="caption">
                            <Typography variant="caption" color="grey.main">2d ago</Typography>
                            <Typography variant="caption" ml={2} color="primary"><b>Open</b></Typography>
                        </Typography>
                    </ListItem>
                    <Divider />
                    <ListItem >
                        <ListItemText primary="Looking for a 100 of banners for a long term"
                                      secondary="Monaco, Germany • Budget • $100"/>
                        <Typography variant="caption">
                            <Typography variant="caption" color="grey.main">5d ago</Typography>
                            <Typography variant="caption" ml={2} color="error"><b>Close</b></Typography>
                        </Typography>
                    </ListItem>
                </List>
            </TabPanel>
            <TabPanel value="2" sx={{px:'0px'}}>Requirements content</TabPanel>
            <TabPanel value="3" sx={{px:'0px'}}>
                <Typography component="h4" variant="h4">Reviews</Typography>
                <List >
                    <ListItem sx={{my:3, py:3, borderRadius:'8px', boxShadow:'inset 0px 0px 0px 1px #E6E8F0;'}}>
                        <Typography component="h6" variant="h6">Overall reviews</Typography>
                        <Rating sx={{ml:2}} name="half-rating" defaultValue={2.5} precision={0.5} disabled={true}/>
                        <Typography sx={{ml:2}} variant="b">2.5/5</Typography>
                        <FiberManualRecordIcon sx={{fontSize:'7px', ml:2, color:"#6B7280"}}/>
                        <Typography sx={{ml:2}} variant="caption">
                            <Typography variant="caption" color="grey.main">3 reviews in total</Typography>
                        </Typography>
                    </ListItem>
                    <Review />
                    <Review />

                </List>

            </TabPanel>
        </TabContext>
    )
}

export default Detailtabs;