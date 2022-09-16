import {useCallback, useEffect, useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import {
    Avatar,
    Box,
    Button,
    Container,
    Dialog,
    Divider,
    Grid,
    Link,
    Typography,
} from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import InvoicePreview from '../../../../components/Finance/Preview'
import InvoicePDF from '../../../../components/Finance/InvoicePDF'

function InvoiceDetail() {
    const [viewPDF, setViewPDF] = useState(false);

    const invoice = {
        id: 1,
        number: 'INV-0018',
        customer: {name: 'Blind Spots Inc.'},
        currency: '$',
        totalAmount: 6855.50,
        status: 'Success',
        issueDate: new Date(),
        dueDate: new Date(),
        items: [
            {
                id: 1,
                description: 'Freelance Subscription (12/05/2019 - 11/06/2019',
                currency: '$',
                unitAmount: 100
            }
        ]
    }

    return (
        <Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <Container maxWidth="md">
                    <Box sx={{mb: 3}}>
                        <Box sx={{mb: 4}}>
                            <Link
                                to="/dashboard/finance"
                                component={RouterLink}
                                underline="none"
                                color="inherit"

                            >

                                <Box
                                    sx={{
                                        alignItems: 'center',
                                        display: 'flex'
                                    }}
                                >
                                    <ArrowBackIcon
                                        fontSize="small"
                                        sx={{mr: 1}}
                                    />
                                    <Typography variant="subtitle2">
                                        Payments
                                    </Typography>
                                </Box>
                            </Link>
                        </Box>
                        <Grid
                            container
                            justifyContent="space-between"
                            spacing={3}
                        >
                            <Grid
                                item
                                sx={{
                                    alignItems: 'center',
                                    display: 'flex'
                                }}
                            >
                                <Avatar
                                    sx={{
                                        height: 42,
                                        mr: 2,
                                        width: 42
                                    }}
                                >
                                    Jaems je
                                </Avatar>
                                <div>
                                    <Typography variant="h4">
                                        {invoice.number}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Typography
                                            color="textSecondary"
                                            variant="body2"
                                        >
                                            {invoice.customer.name}
                                        </Typography>
                                    </Box>
                                </div>
                            </Grid>
                            <Grid
                                item
                                sx={{m: -1}}
                            >
                                <Button
                                    onClick={() => setViewPDF(true)}
                                    sx={{m: 1}}
                                    variant="outlined"
                                >
                                    Preview
                                </Button>
                                <PDFDownloadLink
                                    document={<InvoicePDF invoice={invoice} />}
                                    fileName="invoice"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Button
                                        color="primary"
                                        sx={{ m: 1 }}
                                        variant="contained"
                                    >
                                        Download
                                    </Button>
                                </PDFDownloadLink>
                            </Grid>
                        </Grid>
                    </Box>
                    <InvoicePreview invoice={invoice}/>
                </Container>
            </Box>
            <Dialog
                fullScreen
                open={viewPDF}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%'
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: 'background.default',
                            p: 2
                        }}
                    >
                        <Button
                            startIcon={<ArrowLeftIcon fontSize="small"/>}
                            onClick={() => setViewPDF(false)}
                            variant="contained"
                        >
                            Back
                        </Button>
                    </Box>
                    <Box sx={{flexGrow: 1}}>
                        <PDFViewer
                            height="100%"
                            style={{ border: 'none' }}
                            width="100%"
                        >
                            <InvoicePDF invoice={invoice} />
                        </PDFViewer>
                    </Box>
                </Box>
            </Dialog>
        </Box>
    )
}

export default InvoiceDetail;