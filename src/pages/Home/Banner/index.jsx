import React from 'react'
import './style.scss'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function Banner(){
    return (
        <Box id="top_banner">
            <div className="inner_div">
                <Typography component="h1" variant="h1" sx={{color:"#fff"}}>Find the perfect place for your ads</Typography>
                <Typography component="p" variant="p" sx={{color:"#6B7280", pt:2}}>Post your ad today for free.</Typography>
                <Button variant="contained" color="success" sx={{mt:3}} size="large">Post your ad</Button>
            </div>
        </Box>
    )
}
export default Banner;