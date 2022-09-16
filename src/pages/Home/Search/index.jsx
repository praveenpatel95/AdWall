import React, {useMemo, useState} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InputAdornment from '@mui/material/InputAdornment';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import Input from '@mui/material/Input';
import Divider from '@mui/material/Divider';
import {FormControlLabel, Checkbox} from '@mui/material';
import MultiSelectorForm from '../../../components/MultiSelectorForm'
import useValidator from '../../../utils/useValidator'
import * as Yup from 'yup';


function Search() {
    const onSubmit = () => {

    }

    const {
        values,
        setValues,
        touched,
        handleBlur,
        errors,
        handleSubmit,
        clearFormState,
        getFieldProps,
    } = useValidator({
        initialValues: {
            type: '',
        },
        validationSchema: Yup.object().shape({

        }),
        onSubmit,
    });



    return (
        <Box className="card_box" my={3}>
            <Box>
                <Grid container p={1}>
                    <Grid item xs={4}>
                        <TextField
                            sx={{width: '100%'}}
                            placeholder="Enter a keyword"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon/>
                                    </InputAdornment>
                                ),
                                disableUnderline: true,
                            }}
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={8}>

                        <TextField
                            sx={{width: '100%'}}
                            placeholder="Find a location"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LocationOnIcon/>
                                    </InputAdornment>
                                ),
                                disableUnderline: true,
                            }}
                            variant="standard"
                        />

                    </Grid>
                </Grid>
            </Box>

            <Divider/>
            <MultiSelectorForm values={values} setValues={setValues}/>
        </Box>
    )
}

export default Search;