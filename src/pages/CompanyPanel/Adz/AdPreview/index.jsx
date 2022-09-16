import React from 'react';
import Helmet from 'react-helmet'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import WestIcon from '@mui/icons-material/West';
import {Link as RouterLink} from 'react-router-dom';
import Images from '../../../../components/AdDetailComponent/Images'
import Detailtabs from '../../../../components/AdDetailComponent/Detailtabs'
import RightSection from '../../../../components/AdDetailComponent/RightSection'
import Success from '../../../../components/Alert/success'
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function AdPreview() {
    return (
        <React.Fragment>
            <Helmet>
                <title>Ad Preview</title>
            </Helmet>
            <Container maxWidth="md" sx={{mt: 5}}>
                    <Success title="All done!"
                             subtitle="Here’s a preview of your newly created ad. Apply it once you are ready."/>
                <Grid container spacing={3} mb={3} mt={0}>
                    <Grid item sm={8}>
                        <Card sx={{p: '20px 15px'}}>
                            <Images/>
                            <Detailtabs/>
                        </Card>
                    </Grid>
                    <Grid item sm={4}>
                        <Card sx={{p: '30px 15px'}}>
                            <RightSection/>
                            <Divider sx={{my: '20px'}}/>
                            <Grid container spacing={2}>
                                <Grid item sm={6}>
                                    <Button variant="outlined" color="success" fullWidth>Modify</Button>
                                </Grid>
                                <Grid item sm={6}>
                                    <Button fullWidth variant="contained" endIcon={<ArrowForwardIcon/>}>Apply</Button>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>

    )
}

export default AdPreview;