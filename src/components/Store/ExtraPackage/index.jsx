import {useEffect} from 'react';
import {
    Typography,
    Box,
    Grid,
    Card,
    CardMedia,
    CardContent,
    FormControl,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormLabel,
    Button
}
    from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function ExtraPackage(props) {
    const {pack} = props;
    return (
        <Grid
            item
            md={4}
            xs={12}
        >
            <Typography variant="h4" sx={{mb: 2}}>
                {pack?.name}
            </Typography>
            <Card>
                <CardMedia
                    component="img"
                    height="140"
                    image={pack?.image}
                    alt="green iguana"

                />
                <CardContent sx={{paddingBottom:'10px !important'}}>


                    <FormControl sx={{width: '100%'}}>
                        <RadioGroup

                            name="radio-buttons-group"
                        >
                            {pack?.plans?.length > 0 &&
                            pack?.plans?.map((plan, index) =>
                            <FormControlLabel value={plan?.id}
                                              control={<Radio/>} label={
                                (
                                    <Box sx={{display: 'flex'}}>
                                        <Typography sx={{width: '70%'}}>{plan?.name}</Typography>
                                        <Typography align="right">{plan?.price+" "+plan?.currency}</Typography>
                                    </Box>
                                )
                            }/>
                            )}

                        </RadioGroup>
                    </FormControl>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mt: 2
                        }}
                    >
                        <Button
                            fullWidth
                            variant={'outlined'}
                            endIcon={<ArrowForwardIcon />}
                        >
                            Order
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default ExtraPackage;