import React from 'react';
import Helmet from 'react-helmet'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import BasicDetail from './BasicDetail'
import Plan from './Billing/Plan'
import InvoiceHistory from './Billing/InvoiceHistory'
import ChangePassword from './Security/ChangePassword'
import DeleteAccount from './Security/DeleteAccount'


function Account() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>Account</title>
            </Helmet>
            <Container maxWidth="md">
                <Typography variant="h3">Account</Typography>
                <TabContext value={value}>
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        <TabList onChange={handleChange}>
                            <Tab label="General" value="1"/>
                            <Tab label="Billing" value="2"/>
                            <Tab label="Security" value="3"/>
                        </TabList>
                    </Box>
                    <TabPanel value="1" sx={{padding: '0px', mt: 3}}>
                        <BasicDetail/>
                    </TabPanel>
                    <TabPanel value="2" sx={{padding: '0px', mt: 3}}>
                        {/*<Plan />*/}
                        {/*<br />*/}
                        <InvoiceHistory />
                    </TabPanel>
                    <TabPanel value="3" sx={{padding: '0px', mt: 3}}>
                        <ChangePassword />
                        <br />
                        <DeleteAccount />
                    </TabPanel>
                </TabContext>
            </Container>
        </React.Fragment>
    )
}

export default Account;