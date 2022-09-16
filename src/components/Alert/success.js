import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function Success({title, subtitle}){
    return (
        <Alert severity="success">
            <AlertTitle>{title}</AlertTitle>
            {subtitle}
        </Alert>
    )
}

