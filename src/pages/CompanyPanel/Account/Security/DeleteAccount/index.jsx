import React from 'react';
import {Card,
    CardContent,
    Grid,
    Typography,
    Button
} from '@mui/material';


function DeleteAccount(){
    return (
        <Card sx={{ mt: 4, py:2 }}>
            <CardContent>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        md={4}
                        xs={12}
                    >
                        <Typography  variant="h4">
                            Delete Account
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        md={8}
                        xs={12}
                    >
                        <Typography
                            sx={{ mb: 3 }}
                            variant="h5"
                        >
                            Delete your account and all of your source data. This is irreversible.
                        </Typography>
                        <Button
                            color="error"
                            variant="outlined"
                        >
                            Delete account
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
export default DeleteAccount;