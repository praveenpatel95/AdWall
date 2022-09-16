import React from "react";
import Helmet from 'react-helmet'
import {Container, Box, Typography, Grid} from '@mui/material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import { Link as RouterLink } from 'react-router-dom';

function Login(){
    return (
       <React.Fragment>
           <Helmet>
               <title>Login</title>
           </Helmet>
           <Container
               maxWidth="sm"
               sx={{
                   py: {
                       xs: '60px',
                       md: '120px'
                   }
               }}
           >
               <Box className="card_box" pt={6} pb={2}  px={4}>
                  <Typography variant="h3" align="center">
                      Log in
                  </Typography>
                   <Typography component="p" align="center" className="grey" py={3}>
                       Sign in on the internal platform
                  </Typography>
                   <Grid container spacing={3}>
                       <Grid item xs={12} sm={12}>
                   <TextField fullWidth
                              label="Email address"
                              id="emailAddress" />
                       </Grid>
                       <Grid item xs={12} sm={12}>
                   <TextField fullWidth
                              label="Password"
                              id="password" />
                       </Grid>
                       <Grid item xs={12} sm={12}>
                           <Button fullWidth size='large' className="green_btn" variant="contained"
                                   color="success"
                           >
                               Log In
                           </Button>
                       </Grid>
                   </Grid>
                   <div className="hr_line" mt={3} />
                   <Grid container mt={3}>
                   <Link to="/register" component={RouterLink} color="inherit" className="green_text">
                       Create account
                   </Link>
                   <Link href="#" pl={2} color="inherit" className="green_text">
                       Forgot Password
                   </Link>
                   </Grid>
               </Box>

           </Container>
       </React.Fragment>
    )
}
export default Login;