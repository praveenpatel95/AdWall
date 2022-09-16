import propTypes from 'prop-types';
import { Box, Button, Divider, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export const PricingPlan = (props) => {
    const {  plan, sx, selected, setSelected,  ...other } = props;

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                ...sx
            }}>
            <Box sx={{ px: 3, pb:2 }}>
                <Box
                    sx={{
                        height: 52,
                        width: 52,
                        '& img': {
                            height: 'auto',
                            width: '100%'
                        }
                    }}
                >
                    <img
                        alt=""
                        src={plan?.image}
                    />
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <Typography variant="h4">
                        {plan?.currency}
                        {plan?.price}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        sx={{
                            alignSelf: 'flex-end',
                            ml: 1
                        }}
                        variant="subtitle2"
                    >
                        /mo
                    </Typography>
                </Box>
                <Typography
                    sx={{ mt: 2 }}
                    variant="h5"
                >
                    {plan?.name}
                </Typography>
                <Typography
                    color="textSecondary"
                    sx={{ mt: 2 }}
                    variant="body2"
                >
                    {plan?.description}
                </Typography>
            </Box>
            <Divider />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    p: 3
                }}
            >
                {plan?.features.map((feature) => (
                    <Box
                        key={feature}
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            '& + &': {
                                mt: 2
                            }
                        }}
                    >
                        <CheckIcon
                            fontSize="small"
                            sx={{ color: 'text.primary' }}
                        />
                        <Typography
                            sx={{
                                fontWeight: 500,
                                ml: 2
                            }}
                            variant="body2"
                        >
                            {feature}
                        </Typography>
                    </Box>
                ))}
                <Box sx={{ flexGrow: 1 }} />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: 6
                    }}
                >
                    <Button
                        fullWidth
                        variant={selected === plan?.id ? 'contained' : 'outlined'}
                        onClick={() => setSelected(plan.id)}
                    >
                        Order
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

PricingPlan.propTypes = {
    cta: propTypes.string.isRequired,
    currency: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    features: propTypes.array.isRequired,
    image: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    popular: propTypes.bool,
    price: propTypes.string.isRequired,
    sx: propTypes.object
};
