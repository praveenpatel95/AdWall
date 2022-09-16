import { useCallback, useEffect, useRef, useState } from 'react';
import Helmet from 'react-helmet';
import { endOfDay, startOfDay } from 'date-fns';
import {
    Box,
    Button,
    FormControlLabel,
    Grid,
    Switch,
    Typography,
    useMediaQuery
} from '@mui/material';

import { styled } from '@mui/material/styles';
import Filters from '../../../components/Finance/Filters';
import ListTable from '../../../components/Finance/ListTable';
import FilterIcon from '@mui/icons-material/FilterAlt';
import AddIcon from '@mui/icons-material/Add';

const applyFilters = (invoices, filters) => invoices.filter((invoice) => {
    if (filters.query) {
        const queryMatched = invoice.number.toLowerCase().includes(filters.query.toLowerCase());

        if (!queryMatched) {
            return false;
        }
    }

    if (filters.startDate && invoice.issueDate) {
        // Convert the filter start date to timestamp to be able to compare with the
        // timestamp from the invoice
        const startDateMatched = endOfDay(invoice.issueDate) >= startOfDay(filters.startDate.getTime());

        if (!startDateMatched) {
            return false;
        }
    }

    if (filters.endDate && invoice.issueDate) {
        // Convert the filter end date to timestamp to be able to compare with the
        // timestamp from the invoice
        const endDateMatched = startOfDay(invoice.issueDate) <= endOfDay(filters.endDate.getTime());

        if (!endDateMatched) {
            return false;
        }
    }

    if (filters.customer && filters.customer.length > 0) {
        const customerMatched = filters.customer.includes(invoice.customer.name);

        if (!customerMatched) {
            return false;
        }
    }

    if (filters.status === 'paid' && invoice.status !== 'paid') {
        return false;
    }

    return true;
});

const applyPagination = (invoices, page, rowsPerPage) => invoices.slice(page * rowsPerPage,
    page * rowsPerPage + rowsPerPage);

const InvoiceListInner = styled('div',
    { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        overflow: 'hidden',
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        zIndex: 1,
        [theme.breakpoints.up('lg')]: {
            marginLeft: -380
        },
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        ...(open && {
            [theme.breakpoints.up('lg')]: {
                marginLeft: 0
            },
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            })
        })
    }));

const Finance = () => {
    const rootRef = useRef(null);
    const [invoices, setInvoices] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [openFilters, setOpenFilters] = useState(false);
    const [filters, setFilters] = useState({
        query: '',
        startDate: null,
        endDate: null,
        customer: []
    });


    const getInvoices = useCallback(async () => {
        setInvoices([
            {
                id:1,
                number:"INV-0018",
                customer:{name:'Blind Spots Inc.'},
                currency:'$',
                totalAmount:6855.50,
                status:'Success',
                issueDate:new Date(),
                dueDate:new Date()
            },
            {
                id:2,
                number:13,
                customer:{name:'Dispatcher Inc.'},
                currency:'$',
                totalAmount:120.2,
                status:'Pending',
                issueDate:new Date(),
                dueDate:new Date()
            }
        ])
    }, []);

    useEffect(() => {
            getInvoices();
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []);



    const handleToggleFilters = () => {
        setOpenFilters((prevState) => !prevState);
    };

    const handleChangeFilters = (newFilters) => {
        setFilters(newFilters);
        setPage(0);
    };

    const handleCloseFilters = () => {
        setOpenFilters(false);
    };

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
    };

    // Usually query is done on backend with indexing solutions
    const filteredInvoices = applyFilters(invoices, filters);
    const paginatedInvoices = applyPagination(filteredInvoices, page, rowsPerPage);

    return (
        <>
            <Helmet>
                <title>
                    Dashboard: Invoice List | Material Kit Pro
                </title>
            </Helmet>
            <Box
                component="main"
                ref={rootRef}
                sx={{
                    backgroundColor: 'background.default',
                    display: 'flex',
                    flexGrow: 1,
                    overflow: 'hidden'
                }}
            >
                <Filters
                    containerRef={rootRef}
                    filters={filters}
                    onChange={handleChangeFilters}
                    onClose={handleCloseFilters}
                    open={openFilters}
                />
                <InvoiceListInner open={openFilters}>
                    <Box sx={{ mb: 3 }}>
                        <Grid
                            container
                            spacing={3}
                            justifyContent="space-between"
                        >
                            <Grid item>
                                <Typography variant="h4">
                                    Invoices
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                sx={{ m: -1 }}
                            >
                                <Button
                                    endIcon={<FilterIcon fontSize="small" />}
                                    onClick={handleToggleFilters}
                                    sx={{ m: 1 }}
                                    variant="outlined"
                                >
                                    Filters
                                </Button>
                                <Button
                                    startIcon={<AddIcon fontSize="small" />}
                                    sx={{ m: 1 }}
                                    variant="contained"
                                >
                                    New
                                </Button>
                            </Grid>
                        </Grid>

                    </Box>
                    <ListTable
                        invoices={paginatedInvoices}
                        invoicesCount={filteredInvoices.length}
                        onPageChange={handlePageChange}
                        onRowsPerPageChange={handleRowsPerPageChange}
                        page={page}
                        rowsPerPage={rowsPerPage}
                    />
                </InvoiceListInner>
            </Box>
        </>
    );
};

export default Finance;
