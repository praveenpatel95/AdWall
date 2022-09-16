import React, {useState} from 'react'
import Helmet from 'react-helmet';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import WestIcon from '@mui/icons-material/West';
import {Link as RouterLink} from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import {CardActions, IconButton} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import StarIcon from '@mui/icons-material/Star';

import Images from '../../../../../components/AdDetailComponent/Images'
import Detailtabs from '../../../../../components/AdDetailComponent/Detailtabs'
import RightSection from '../../../../../components/AdDetailComponent/RightSection'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Uplift(){
    return (
        <React.Fragment>
            <Helmet>
                <title>Ad Detail</title>
            </Helmet>
            <Container maxWidth="md" sx={{mt: 5}}>
                <Link to="/dashboard/ad/list" component={RouterLink} color="inherit" underline="none"
                      sx={{lineHeight: '24px', display: 'inline-flex'}}>
                    <WestIcon fontSize="small"/>&nbsp;&nbsp;Adz
                </Link>
                <Grid container spacing={3} mb={3} mt={0}>
                    <Grid item sm={8}>
                        <Card sx={{mb:2}}>
                            <CardContent>
                                <Grid container spacing={3}  sx={{textAlign:'center'}}>
                                    <Grid item sm={2}>
                                        <Button color="inherit" size="small" endIcon={(<ArrowUpwardIcon />)}>
                                            Uplift
                                        </Button>
                                    </Grid>
                                    <Grid item sm={3}>
                                        <Button color="inherit" size="small" endIcon={(<StarIcon />)}>
                                            Use VIP
                                        </Button>
                                    </Grid>
                                    <Grid item sm={2}>
                                        <Button color="inherit" size="small" endIcon={(<BorderColorIcon />)}>
                                            Modify
                                        </Button>
                                    </Grid>
                                    <Grid item sm={2}>
                                        <Button color="inherit" size="small" endIcon={(<KeyboardBackspaceIcon />)}>
                                            Hold
                                        </Button>
                                    </Grid>
                                    <Grid item sm={2}>
                                        <Button color="inherit" size="small" endIcon={(<DeleteForeverIcon />)}>
                                            Delete
                                        </Button>
                                    </Grid>
                                </Grid>



                            </CardContent>
                        </Card>
                        <Card sx={{p: '20px 15px'}}>
                            <Images/>
                            <Detailtabs />
                        </Card>
                    </Grid>
                    <Grid item sm={4}>
                        <Card sx={{p: '30px 15px'}}>
                            <RightSection/>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default Uplift;