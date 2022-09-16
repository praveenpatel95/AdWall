import React, {useState} from 'react'
import Helmet from 'react-helmet';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import WestIcon from '@mui/icons-material/West';
import {Link as RouterLink} from 'react-router-dom';
import Images from '../../components/AdDetailComponent/Images'
import Detailtabs from '../../components/AdDetailComponent/Detailtabs'
import RightSection from '../../components/AdDetailComponent/RightSection'
import ChatAuthModal from '../../components/ChatAuthModal';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function AdDetail() {
    const [chatModal, setChatModal] = useState(false)

    return (
        <React.Fragment>
            <Helmet>
                <title>Ad Detail</title>
            </Helmet>
            <Container maxWidth="md" sx={{mt: 5}}>
                <Link to="/" component={RouterLink} color="inherit" underline="none"
                      sx={{lineHeight: '24px', display: 'inline-flex'}}>
                    <WestIcon fontSize="small"/>&nbsp;&nbsp;Adz
                </Link>
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
                                    <Button variant="outlined" color="success" onClick={() => setChatModal(true)}
                                            fullWidth>Contact</Button>
                                </Grid>
                                <Grid item sm={6}>
                                    <Button fullWidth variant="contained" endIcon={<ArrowForwardIcon/>}>Offer</Button>
                                </Grid>

                            </Grid>
                            <ChatAuthModal chatModal={chatModal} setChatModal={setChatModal}/>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default AdDetail;