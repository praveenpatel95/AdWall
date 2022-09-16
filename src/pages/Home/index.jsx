import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Banner from './Banner'
import Search from './Search'
import AdCard from '../../components/AdCard'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Helmet from 'react-helmet';

function Home(){
    return (
        <React.Fragment>
            <Helmet>
                <title>Adz</title>
            </Helmet>
            <Container maxWidth="md"  sx={{ mt: 5 }}>
                <Banner />
                <Search />
                <Grid container spacing={2} my={3}>
                    {[...Array(9)].map((i) =>
                   <Grid item sm={4}>
                       <AdCard />
                   </Grid>
                    )}
                </Grid>
                <Typography align="center" my={5}>
                    <Link href="#" color="inherit">
                        <ChevronLeftIcon />
                    </Link>
                    <Link href="#" color="inherit">
                        <ChevronRightIcon />
                    </Link>
                </Typography>
            </Container>
        </React.Fragment>
    )
}
export default Home;