import PropTypes from 'prop-types';
import {
    Box,
    Button,
    Card,
    Divider,
    FormControl,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    MenuItem,
    Select,
    TextField,
    Typography,
    Dialog
} from '@mui/material';


function CardBasket(props){
    const {openCart, setOpenCart, carts, onQuantityChange} = props

    const handleClose = () => {
        setOpenCart(false);
    };

    return (
        <Dialog
            open={openCart}
            onClose={handleClose}
            sx={{
                "& .MuiDialog-container": {
                    justifyContent: "flex-end",
                    alignItems: "flex-end"
                }
            }}
            PaperProps={{
                sx: {
                    right: 40,
                    width:'400px'
                }
            }}

        >
        <Card
            variant="outlined"
            sx={{ p: 3 }}
        >
            <Typography variant="h5">
                Order Summary
            </Typography>
            <List >
                {carts?.length > 0 && carts?.map((cart, index) =>
                    <ListItem
                        disableGutters
                        key={1}
                    >
                        <ListItemAvatar sx={{ pr: 2 }}>
                            <Box
                                sx={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    height: 70,
                                    justifyContent: 'center',
                                    overflow: 'hidden',
                                    width: 70,
                                    '& img': {
                                        width: '100%',
                                        height: 'auto'
                                    }
                                }}
                            >
                                <img
                                    alt="Product"
                                    src={cart?.image}
                                />
                            </Box>
                        </ListItemAvatar>
                        <ListItemText
                            primary={(
                                <Typography
                                    sx={{ fontWeight: 'fontWeightBold' }}
                                    variant="subtitle2"
                                >
                                    {cart?.name}
                                </Typography>
                            )}
                            secondary={(
                                <Typography
                                    color="textSecondary"
                                    sx={{ mt: 1 }}
                                    variant="body1"
                                >
                                    {cart?.price+" "+cart?.currency}
                                </Typography>
                            )}
                        />
                        <ListItemSecondaryAction>
                            <FormControl
                                size="small"
                                variant="outlined"
                            >
                                <Select
                                    value={cart?.qty}
                                    onChange={(event) => onQuantityChange?.(event, cart?.id)}
                                >
                                    <MenuItem value={1}>
                                        1
                                    </MenuItem>
                                    <MenuItem value={2}>
                                        2
                                    </MenuItem>
                                    <MenuItem value={3}>
                                        3
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </ListItemSecondaryAction>
                    </ListItem>
                )}
            </List>
            <TextField
                fullWidth
                placeholder="Discount Code"
                size="small"
                sx={{ mt: 1 }}
            />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    mt: 1
                }}
            >
                <Button type="button">
                    Apply Coupon
                </Button>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mt: 2
                }}
            >
                <Typography variant="subtitle2">
                    Subtotal
                </Typography>
                <Typography variant="subtitle2">
                    $
                    200
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mt: 2
                }}
            >
                <Typography variant="subtitle2">
                    Shipping Tax
                </Typography>
                <Typography variant="subtitle2">
                    $
                    300
                </Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <Typography variant="subtitle2">
                    Total
                </Typography>
                <Typography variant="subtitle2">
                    $
                    19
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 3
                }}
            >
                <Button
                    color="primary"
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                >
                    Complete order
                </Button>
            </Box>
        </Card>
        </Dialog>
    )
}
export default CardBasket;