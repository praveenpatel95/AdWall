import React, {useState} from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Logo from '../../../../../components/Logo';


function Plan(){
    const plans = [
        {
            image: <Logo />,
            name: 'Startup',
            price: '0',
            current: true
        },
        {
            image: <Logo />,
            name: 'Standard',
            price: '4.99',
            current: false
        },
        {
            image: <Logo />,
            name: 'Business',
            price: '29.99',
            current: false
        }
    ];

    const [selected, setSelected] = useState('Standard');
    return (
        <Card>
            <CardContent>
                <div>
                    <Typography variant="h4">Your plan</Typography>
                    <Typography variant="p">You can upgrade and downgrade whenever you want in the store</Typography>

                </div>
                <Box sx={{ mt: 3 }}>
                    <Grid
                        container
                        spacing={3}
                    >
                        {plans.map((plan) => (
                            <Grid
                                item
                                key={plan.name}
                                sm={4}
                                xs={12}
                            >
                                <Card
                                    elevation={0}
                                    onClick={() => setSelected(plan.name)}
                                    variant="outlined"
                                    sx={{
                                        cursor: 'pointer',
                                        ...(selected === plan.name && {
                                            borderColor: 'primary.main',
                                            borderWidth: 2,
                                            m: '-1px'
                                        })
                                    }}
                                >
                                    <CardContent>
                                        <Logo />
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                mb: 1,
                                                mt: 1
                                            }}
                                        >
                                            <Typography variant="h5">
                                                $
                                                {plan.price}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                sx={{
                                                    mt: 'auto',
                                                    ml: '4px'
                                                }}
                                                variant="body2"
                                            >
                                                /mo
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                alignItems: 'center',
                                                display: 'flex',
                                                justifyContent: 'space-between'
                                            }}
                                        >
                                            <Typography variant="overline">
                                                {plan.name}
                                            </Typography>
                                            {plan.current && (
                                                <Typography
                                                    color="secondary.main"
                                                    variant="caption"
                                                >
                                                    Using now
                                                </Typography>
                                            )}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Typography sx={{py:2}}  variant="p" component="p">We cannot refund once you purchased a subscription, but you can always Cancel</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}
                >
                    <Button variant="contained">
                        Upgrade Plan
                    </Button>
                </Box>
            </CardContent>

        </Card>
    )
}
export default Plan;