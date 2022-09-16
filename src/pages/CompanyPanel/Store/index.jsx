import {useEffect, useState} from 'react';
import Helmet from 'react-helmet';
import {Badge,
    Box, Container, Divider, Grid, Switch, Typography,
    Card,
    CardMedia,
    CardContent,
    SpeedDial

}
from '@mui/material';
import {PricingPlan} from '../../../components/Store/PricingPlan';
import ExtraPackage from '../../../components/Store/ExtraPackage';
import CardBasket from '../../../components/Store/CardBasket';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './style.scss'

const Store = () => {

    const [selected, setSelected] = useState(2)
    const [openCart, setOpenCart] = useState(false)

    const plans = [
        {
            id:1,
            currency: '€',
            price: '5.99 ',
            name: 'Basic',
            description: 'To familiarize yourself with our tools.',
            features: [
                'Up to 5 adz',
                '10 upflits',
                '2 VIP days'
            ],
            image: process.env.PUBLIC_URL + '/assets/images/pricing/plan2.svg',

        },
        {
            id:2,
            currency: '€',
            price: '10.99',
            name: 'Professional',
            description: 'To familiarize yourself with our tools.',
            features: [
                'Up to 15 adz',
                'Highlights reporting',
                'Data history',
                'Unlimited users'
            ],
            image: process.env.PUBLIC_URL + '/assets/images/pricing/plan2.svg',

        },
        {
            id:3,
            currency: '€',
            price: '5.99 ',
            name: 'Basic',
            description: 'To familiarize yourself with our tools.',
            features: [
                'All previous',
                'Highlights reporting',
                'Data history',
                'Unlimited users'
            ],
            image: process.env.PUBLIC_URL + '/assets/images/pricing/plan2.svg',
        },
    ];

    const extraPacks = [
        {
            name:'ADZ',
            image:process.env.PUBLIC_URL+"/assets/images/pricing/adz.png",
            plans:[
                {
                    id: 1,
                    name: '3 static adz',
                    price: '3.99',
                    currency: '€'
                },
                {
                    id: 2,
                    name: '5 static adz',
                    price: '5.99',
                    currency: '€'
                },
                {
                    id: 3,
                    name: '10 static adz',
                    price: '9.99',
                    currency: '€'
                }
            ]
        },
        {
            name:'UPLIFTS',
            image:process.env.PUBLIC_URL+"/assets/images/pricing/uplift.png",
            plans:[
                {
                    id: 1,
                    name: '10 uplifts',
                    price: '3.99',
                    currency: '€'
                },
                {
                    id: 2,
                    name: '30 uplifts',
                    price: '5.99',
                    currency: '€'
                },
                {
                    id: 3,
                    name: '50 uplifts',
                    price: '7.99',
                    currency: '€'
                }
            ]
        },
        {
            name:'VIP',
            image:process.env.PUBLIC_URL+"/assets/images/pricing/vip.png",
            plans:[
                {
                    id: 1,
                    name: '1 vip day',
                    price: '3.99',
                    currency: '€'
                },
                {
                    id: 2,
                    name: '3 vip days',
                    price: '5.99',
                    currency: '€'
                },
                {
                    id: 3,
                    name: '7 vip days',
                    price: '7.99',
                    currency: '€'
                }
            ]
        }
    ];

    const [carts, setCarts] = useState([
        {
            id:1,
            name:'10 Uplifts',
            price: '7.99',
            currency: '€',
            image:process.env.PUBLIC_URL+"/assets/images/pricing/vip.png",
            qty:1
        },
        {
            id:2,
            name:'1 VIP day',
            price: '3.99',
            currency: '€',
            image:process.env.PUBLIC_URL+"/assets/images/pricing/uplift.png",
            qty:2
        }
    ]);

    const handleProductQuantityChange = (event, cartId) => {
        setCarts((prevCarts) => prevCarts.map((cart) => {
            if (cart.id === cartId) {
                return {
                    ...cart,
                    qty: event.target.value
                };
            }

            return cart;
        }));
    };

    return (
        <>
            <Helmet>
                <title>
                    Store
                </title>
            </Helmet>
            <Box
                component=""
                sx={{
                    flexGrow: 1,
                    pb: 6
                }}
            >
                <Box
                    sx={{
                        pt: 1,
                    }}
                >
                    <Container maxWidth="md">
                        <Grid
                            container
                            alignItems="center"
                            spacing={2}
                            flexWrap="nowrap"
                        >
                            <Grid
                                item
                                md={7}
                                xs={12}
                            >
                                <Typography variant="h3">
                                    Start today. Boost up your ADZ!
                                </Typography>

                            </Grid>
                            <Grid
                                item
                                md={5}
                                sx={{
                                    display: {
                                        md: 'block',
                                        xs: 'none'
                                    }
                                }}
                            >
                                <Box
                                    sx={{
                                        height: 250,
                                        maxWidth: 419,
                                        position: 'relative',
                                        '& img': {
                                            height: 'auto',
                                            position: 'absolute',
                                            top: 0,
                                            width: '100%'
                                        }
                                    }}
                                >
                                    <img
                                        alt="Pricing hero"
                                        src={process.env.PUBLIC_URL + '/assets/images/pricing/pricing_light.svg'}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <Divider/>
                <Box
                    sx={{
                        background: '#fff'
                    }}
                >
                    <Container
                        maxWidth="md"
                        sx={{py: 6}}
                    >

                        <Typography variant="h4">
                            Bundles
                        </Typography>
                        <Grid
                            container
                            spacing={4}
                        >
                            {plans?.length > 0 && plans?.map((plan, index) =>
                                <Grid
                                    item
                                    md={4}
                                    xs={12}
                                >
                                    <PricingPlan
                                        plan={plan}
                                        key={index}
                                        selected={selected}
                                        setSelected={setSelected}
                                        sx={{
                                            height: '100%',
                                            maxWidth: 460,
                                            mx: 'auto'
                                        }}
                                    />

                                </Grid>
                            )}

                        </Grid>
                    </Container>
                </Box>

                <Container
                    maxWidth="md"
                    sx={{py: 8}}
                    id="customForm"
                >
                    <Grid
                        container
                        spacing={4}
                        sx={{px: 3}}

                    >

                        { extraPacks?.length > 0 &&
                        extraPacks.map((pack, index) =>
                            <ExtraPackage pack={pack}/>
                        )}
                    </Grid>
                </Container>
                <CardBasket
                    openCart={openCart}
                    setOpenCart={setOpenCart}
                    carts={carts}
                    onQuantityChange={handleProductQuantityChange}
                />

                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'fixed', bottom: 16, right: 16 }}
                    onClick={() => setOpenCart(true)}
                    icon={<ShoppingCartIcon />}
                 />
            </Box>
        </>
    );
};

export default Store;
