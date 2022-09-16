import { Fragment } from 'react';
import { format } from 'date-fns';
import { Link as RouterLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import {
    Avatar,
    Box,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TablePagination,
    TableRow,
    Typography,
    Link
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRightAlt';
import Scrollbar from '../../scrollbar';


const InvoiceRow = (props) => {
    const { invoice } = props;

    return (
        <TableRow
            key={invoice.id}
            sx={{
                boxShadow: 1,
                transition: (theme) => theme.transitions.create('box-shadow', {
                    easing: theme.transitions.easing.easeOut
                }),
                '&:hover': {
                    boxShadow: 8
                },
                '& > td': {
                    backgroundColor: 'background.paper',
                    borderBottom: 0
                }
            }}
        >
            <TableCell width="25%">
                <Link
                    underline="none"
                >
                    <Box
                        component="a"
                        sx={{
                            alignItems: 'center',
                            display: 'inline-flex',
                            textDecoration: 'none',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        <Avatar
                            sx={{
                                height: 42,
                                width: 42
                            }}
                        >
                           Demo PRem
                        </Avatar>
                        <Box sx={{ ml: 2 }}>
                            <Typography
                                color="textPrimary"
                                variant="subtitle2"
                            >
                                {invoice.number}
                            </Typography>
                            <Typography
                                color="textSecondary"
                                variant="body2"
                            >
                                {invoice.customer.name}
                            </Typography>
                        </Box>
                    </Box>
                </Link>
            </TableCell>
            <TableCell>
                <Typography variant="body2">
                    {invoice.currency}
                    {invoice.totalAmount}
                </Typography>
            </TableCell>
            <TableCell>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Typography variant="subtitle2">
                        Issued
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="body2"
                    >
                        {invoice.issueDate && format(invoice.issueDate, 'dd/MM/yyyy')}
                    </Typography>
                </Box>
            </TableCell>
            <TableCell>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Typography variant="subtitle2">
                        Due
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="body2"
                    >
                        {invoice.dueDate && format(invoice.dueDate, 'dd/MM/yyyy')}
                    </Typography>
                </Box>
            </TableCell>
            <TableCell align="right">
                <Link
                    to={`detail/${invoice.id}`}
                    component={RouterLink}
                >
                    <IconButton component="a">
                        <ArrowRightIcon fontSize="small" />
                    </IconButton>
                </Link>
            </TableCell>
        </TableRow>
    );
};

export default function ListTable(props){
    const {
        invoices,
        invoicesCount,
        onPageChange,
        onRowsPerPageChange,
        page,
        rowsPerPage,
        ...other
    } = props;


    return (
        <div {...other}>
            <Scrollbar>
                <Table
                    sx={{
                        borderCollapse: 'separate',
                        borderSpacing: (theme) => `0 ${theme.spacing(3)}`,
                        minWidth: 600,
                        marginTop: (theme) => `-${theme.spacing(3)}`,
                        p: '1px'
                    }}
                >

                        <TableBody>
                            {invoices.map((invoice) => (
                                <InvoiceRow
                                    invoice={invoice}
                                    key={invoice.id}
                                />
                            ))}
                        </TableBody>
                </Table>
            </Scrollbar>
            <TablePagination
                component="div"
                count={invoicesCount}
                onPageChange={onPageChange}
                onRowsPerPageChange={onRowsPerPageChange}
                page={page}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[5, 10, 25]}
            />
        </div>
    );
};

ListTable.propTypes = {
    invoices: PropTypes.array.isRequired,
    invoicesCount: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    onRowsPerPageChange: PropTypes.func,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired
};
