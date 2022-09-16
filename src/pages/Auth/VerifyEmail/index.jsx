import React from "react";
import Helmet from 'react-helmet'
import {Container, Box, Typography, Grid} from '@mui/material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link as RouterLink } from 'react-router-dom';
import { InputLabel } from '@mui/material';

function VerifyEmail(){
    const autoTab = (e: ChangeEvent<HTMLInputElement>) => {
        if (`${e.target.value.length}` === e.target.getAttribute("maxlength")) {
            var inputs = document.getElementsByClassName("autotab");

            for (let i = 0; i < inputs.length; i++) {
                if (e.target == inputs[i]) {
                    i++;
                    if (i < inputs.length) {
                        let next: any = inputs[i];
                        next.focus();
                    }
                }
            }
        }
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>Verify email</title>
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
                    <Typography variant="h1" align="center" mb={3}>
                        Verify email
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12}>
                            <TextField fullWidth
                                       label="Email address"
                                       value="demo@gmail.com"
                                       id="emailAddress" disabled={true}/>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <InputLabel>Email code</InputLabel>
                        </Grid>
                        {Array.from({ length: 6 }, (element, index) => (
                        <Grid item xs={2} >
                            <TextField  placeholder="0"
                                        color="success"
                                        inputProps={{ className: "autotab input-center", maxLength: 1 }}
                                        onChange={(e) => {
                                            autoTab(e);
                                        }}
                            />
                        </Grid>
                        ))}

                        <Grid item xs={12} sm={12}>
                        <Link  to="/" component={RouterLink} color="inherit" className="green_text">
                            Resend code
                        </Link>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Button fullWidth size='large' className="green_btn" variant="contained"
                                    color="success"
                            >
                                Verify code
                            </Button>
                        </Grid>
                    </Grid>
                    <div className="hr_line" mt={3} />

                </Box>

            </Container>
        </React.Fragment>
    )
}
export default VerifyEmail;