import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Helmet from 'react-helmet'
import useValidator from '../../../../utils/useValidator'
import * as Yup from 'yup';
import MultiSelectorForm from '../../../../components/MultiSelectorForm'

import {
    Container,
    Typography,
    Box,
    Button,
    TextField,
    Grid,
    Card,
    Radio,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    InputAdornment,
    ListItem,
    IconButton,
    Link,
    List,
    ListItemIcon,
    ListItemText,
    Tooltip,
    ImageList,
    ImageListItem,
    FormHelperText
} from '@mui/material';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import {styled, alpha} from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import MultiUploader from '../../../../components/MultiUploader'

const StyledStepLabel = styled(StepLabel)({
    '& .MuiStepLabel-label': {
        textTransform: 'uppercase',
        fontSize: '12px'
    }
});


const typeOptions = [
    {
        description: 'Engage an additional audience',
        title: 'Advertiser',
        value: 'Advertiser'
    },
    {
        description: 'Help advertisers',
        title: 'Distributor',
        value: 'Distributor'
    }
];

function Create() {
    const navigate = useNavigate();

    const onSubmit = () => {
        return navigate('/dashboard/ad/preview');
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
            title: '',
            age: '',
            budget: '',
            period: '',
            cover_img: '',
            type: '',
        },
        validationSchema: Yup.object().shape({
            title: Yup.string().required('Title is required.'),
            age: Yup.string().required('Age is required.'),
            budget: Yup.string().required('budget is required.'),
            period: Yup.string().required('Period is required.'),
            cover_img: Yup.string().required('Select cover image.'),
            type: Yup.string().required('Type is required.'),
        }),
        onSubmit,
    });

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const [type, setType] = useState(typeOptions[1].value);

    const handleChange = (newType) => {
        setType(newType);
    };

    //Upload files
    const [files, setFiles] = useState([]);


    const handleStep2 = () => {
        if (values?.title && values?.age && values?.budget && values?.period) {
            handleNext();
        }
    } 
    
    const handleStep3 = () => {
        if (values?.type?.length > 0) {
            handleNext();
        }
    }

    const [coverImage, setCoverImage] = useState('')
    const handleChooseCover = (file, fileKey) => {
        console.log("fileKey", file)
        setValues({...values, cover_img: file})
        setCoverImage(fileKey)
    }

    const NextBack = () => {
        return (
            <Box sx={{mb: 2}}>
                <div>
                    <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{mt: 1, mr: 1}}
                        endIcon={<ArrowForwardIcon/>}
                    >
                        Continue
                    </Button>
                    <Button
                        onClick={handleBack}
                        sx={{mt: 1, mr: 1}}
                    >
                        Back
                    </Button>
                </div>
            </Box>
        )
    }




    return (
        <React.Fragment>
            <Helmet>
                <title>Create An Ad</title>
            </Helmet>
            <form onSubmit={handleSubmit}>
                <Container maxWidth="sm">
                    <Typography variant="h3">Create An Ad</Typography>
                    <Box sx={{mt: 1}} id="ad_step">
                        <Stepper activeStep={activeStep} orientation="vertical">
                            <Step key="1">
                                <StyledStepLabel>
                                    Category
                                </StyledStepLabel>
                                <StepContent>
                                    <Typography>I’m an ...</Typography>
                                    <Box sx={{mt: 3}}>
                                        {typeOptions.map((typeOption) => (
                                            <Box
                                                key={typeOption.value}
                                                sx={{mb: 2}}
                                            >
                                                <Card
                                                    key={typeOption.value}
                                                    sx={{
                                                        alignItems: 'center',
                                                        cursor: 'pointer',
                                                        display: 'flex',
                                                        p: 2,
                                                        ...(type === typeOption.value && {
                                                            borderColor: 'primary.main',
                                                            borderWidth: 2,
                                                            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.08),
                                                            m: '-1px'
                                                        })
                                                    }}
                                                    onClick={() => handleChange(typeOption.value)}
                                                    variant="outlined"
                                                >
                                                    <Radio
                                                        checked={type === typeOption.value}
                                                        color="primary"
                                                    />
                                                    <Box sx={{ml: 2}}>
                                                        <Typography variant="subtitle1">
                                                            {typeOption.title}
                                                        </Typography>
                                                        <Typography
                                                            color="textSecondary"
                                                            variant="body2"
                                                        >
                                                            {typeOption.description}
                                                        </Typography>
                                                    </Box>
                                                </Card>
                                            </Box>
                                        ))}
                                    </Box>
                                    <Box sx={{mb: 2}}>
                                        <div>
                                            <Button
                                                variant="contained"
                                                onClick={handleNext}
                                                sx={{mt: 1, mr: 1}}
                                                endIcon={<ArrowForwardIcon/>}
                                            >
                                                Continue
                                            </Button>
                                        </div>
                                    </Box>
                                </StepContent>
                            </Step>
                            <Step key="2">
                                <StyledStepLabel>
                                    Basic Details
                                </StyledStepLabel>
                                <StepContent>
                                    <Typography>What do you want to advertise?</Typography>
                                    <Card sx={{py: 2, px: 3, my: 2}}>
                                        <Grid container spacing={2}>
                                            <Grid xs={12} item>
                                                <TextField size="small" fullWidth
                                                           label="Title"
                                                           value={values?.title}
                                                           onChange={(e) => setValues({
                                                               ...values,
                                                               title: e.target.value
                                                           })}
                                                           placeholder="e.g. Looking for banners"
                                                />
                                                {touched?.title && errors?.title ? (
                                                    <FormHelperText error >{errors?.title}</FormHelperText>
                                                ) : (
                                                    ''
                                                )}
                                            </Grid>
                                            <Grid xs={6} item>
                                                <FormControl fullWidth size="small">
                                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                                    <Select label="Country" value={values?.age}
                                                            onChange={(e) => setValues({...values, age:e.target.value})}>
                                                        <MenuItem value="Spain">Spain</MenuItem>
                                                        <MenuItem value="Poland">Poland</MenuItem>
                                                        <MenuItem value="Italy">Italy</MenuItem>
                                                    </Select>
                                                    {touched?.age && errors?.age ? (
                                                        <FormHelperText error >{errors?.age}</FormHelperText>
                                                    ) : (
                                                        ''
                                                    )}
                                                </FormControl>
                                            </Grid>
                                            <Grid xs={6} item>
                                                <FormControl fullWidth size="small">
                                                    <InputLabel>City</InputLabel>
                                                    <Select label="City">
                                                        <MenuItem value="Artesam">Artesam</MenuItem>
                                                        <MenuItem value="Gona">Gona</MenuItem>
                                                        <MenuItem value="Udaiur">Udaiur</MenuItem>
                                                    </Select>

                                                </FormControl>
                                            </Grid>
                                            <Grid xs={6} item>
                                                <TextField size="small" fullWidth
                                                           label="Budget"
                                                           placeholder="e.g. 300"
                                                           value={values?.budget}
                                                           onChange={(e) => setValues({...values, budget:e.target.value})}
                                                           InputProps={{
                                                               endAdornment: <InputAdornment position="end">
                                                                   <Select size="small" value="$"
                                                                           variant="standard"
                                                                   >
                                                                       <MenuItem value="$">$</MenuItem>
                                                                       <MenuItem value="€">€</MenuItem>
                                                                   </Select>
                                                               </InputAdornment>,
                                                           }}
                                                />
                                                {touched?.budget && errors?.budget ? (
                                                    <FormHelperText error >{errors?.budget}</FormHelperText>
                                                ) : (
                                                    ''
                                                )}

                                            </Grid>
                                            <Grid xs={6} item>
                                                <FormControl fullWidth size="small">
                                                    <InputLabel>Period</InputLabel>
                                                    <Select label="Period"
                                                            value={values?.period}
                                                            onChange={(e) => setValues({...values, period:e.target.value})}

                                                    >
                                                        <MenuItem value="Daily">Daily</MenuItem>
                                                        <MenuItem value="Weekly">Weekly</MenuItem>
                                                        <MenuItem value="Monthly">Monthly</MenuItem>
                                                    </Select>
                                                    {touched?.period && errors?.period ? (
                                                        <FormHelperText error >{errors?.period}</FormHelperText>
                                                    ) : (
                                                        ''
                                                    )}
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                    <Box sx={{mb: 2}}>
                                        <div>
                                            <Button
                                                variant="contained"
                                                onClick={() => {
                                                    handleStep2();
                                                }}
                                                sx={{mt: 1, mr: 1}}
                                                endIcon={<ArrowForwardIcon/>}
                                                type="submit"
                                            >
                                                Continue
                                            </Button>
                                            <Button
                                                onClick={handleBack}
                                                sx={{mt: 1, mr: 1}}
                                            >
                                                Back
                                            </Button>
                                        </div>
                                    </Box>
                                </StepContent>
                            </Step>
                            <Step key="3">
                                <StyledStepLabel>
                                    specific criteria
                                </StyledStepLabel>
                                <StepContent>
                                    <Typography>Add area-specific criteria</Typography>
                                    <Card sx={{py: 2, my: 2}}>
                                        <MultiSelectorForm
                                            values={values}
                                            setValues={setValues}
                                        />
                                    </Card>
                                    <Box sx={{mb: 2}}>
                                        <div>
                                            <Button
                                                variant="contained"
                                                onClick={() => {
                                                    handleStep3();
                                                }}
                                                sx={{mt: 1, mr: 1}}
                                                endIcon={<ArrowForwardIcon/>}
                                                type="submit"
                                            >
                                                Continue
                                            </Button>
                                            <Button
                                                onClick={handleBack}
                                                sx={{mt: 1, mr: 1}}
                                            >
                                                Back
                                            </Button>
                                        </div>
                                    </Box>
                                </StepContent>
                            </Step>
                            <Step key="4">
                                <StyledStepLabel>
                                    Description
                                </StyledStepLabel>
                                <StepContent>
                                    <Typography>How would you desribe the adverisement post?</Typography>
                                    <Card sx={{py: 2, px: 3, my: 2}}>
                                        <ReactQuill theme="snow"
                                                    placeholder="Write something"
                                                    style={{
                                                        height: 200,
                                                        marginBottom: '50px'
                                                    }}
                                        />
                                    </Card>
                                    <Typography>Any speecial requirenments?</Typography>
                                    <Card sx={{py: 2, px: 3, my: 2}}>
                                        <ReactQuill theme="snow"
                                                    placeholder="Write something"
                                                    style={{
                                                        height: 100,
                                                        marginBottom: '50px'
                                                    }}
                                        />
                                    </Card>
                                    <NextBack/>
                                </StepContent>
                            </Step>
                            <Step key="5">
                                <StyledStepLabel>
                                    Images
                                </StyledStepLabel>
                                <StepContent>
                                    <Card sx={{py: 2, px: 3, my: 2}}>
                                        <MultiUploader
                                            accept={{
                                                'image/*': []
                                            }}
                                            files={files}
                                            setFiles={setFiles}/>
                                    </Card>
                                    <Typography component="h6">Choose cover</Typography>
                                    {files.length > 0 && touched?.cover_img && errors?.cover_img ? (
                                        <FormHelperText error >{errors?.cover_img}</FormHelperText>
                                    ) : (
                                        ''
                                    )}
                                    { values?.cover_img &&
                                    <img
                                        src={URL.createObjectURL(values?.cover_img)}
                                        loading="lazy"
                                        style={{
                                            border: '2px solid #F9FAFC',
                                            maxWidth:'100%'

                                        }}
                                    />
                                    }
                                    <ImageList variant="masonry" cols={3} gap={8}>
                                        {files.length > 0 &&
                                        files.map((file, index) => (
                                                <ImageListItem key={index}

                                                               onClick={() => handleChooseCover(file, index)}

                                                >
                                                    {
                                                        coverImage === index &&
                                                        <Typography sx={{
                                                            position: 'absolute',
                                                            right: 5,
                                                            top: 2

                                                        }}><CheckCircleIcon sx={{
                                                            color: '#2AA587',
                                                            background: '#fff', borderRadius: '15px'
                                                        }}/></Typography>
                                                    }
                                                    <img
                                                        src={URL.createObjectURL(file)}
                                                        srcSet={URL.createObjectURL(file)}
                                                        alt={file.path}
                                                        loading="lazy"
                                                        style={{
                                                            border: '2px solid #F9FAFC',
                                                            cursor: 'pointer',
                                                            ...(coverImage === index && {
                                                                border: '2px solid #2AA587',
                                                            })
                                                        }}
                                                    />
                                                </ImageListItem>
                                            )
                                        )}
                                    </ImageList>
                                    <Box sx={{mb: 2}}>
                                        <div>
                                            <Button
                                                variant="contained"
                                                sx={{mt: 1, mr: 1}}
                                                type="submit"
                                            >
                                                Create ad
                                            </Button>
                                            <Button
                                                onClick={handleBack}
                                                sx={{mt: 1, mr: 1}}
                                            >
                                                Back
                                            </Button>
                                        </div>
                                    </Box>
                                </StepContent>
                            </Step>
                        </Stepper>
                    </Box>
                </Container>
            </form>
        </React.Fragment>
    )
}

export default Create;