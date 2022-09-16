import React from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    Grid,
    Link,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';

function InvoiceHistory() {
    return (
        <Card>
            <CardContent>
                <Typography variant="h4">Invoice history</Typography>
                <Typography variant="p">You can view and download all your previous invoices here. If you’ve just made a payment, it may take a few hours for it to appear in the table below.</Typography>

            </CardContent>
            <Table>
                <TableHead sx={{background:'#F3F4F6'}}>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Total (incl. tax)</TableCell>
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>2 Jun 2021</TableCell>
                        <TableCell>$4.99</TableCell>
                        <TableCell align="right">
                            <Link
                                underline="always"
                                href="#"
                            >
                                View Invoice
                            </Link>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>2 May 2021</TableCell>
                        <TableCell>$4.99</TableCell>
                        <TableCell align="right">
                            <Link
                                underline="always"
                                href="#"
                            >
                                View Invoice
                            </Link>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>2 April 2021</TableCell>
                        <TableCell>$4.99</TableCell>
                        <TableCell align="right">
                            <Link
                                underline="always"
                                href="#"
                            >
                                View Invoice
                            </Link>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Card>
    )
}

export default InvoiceHistory;