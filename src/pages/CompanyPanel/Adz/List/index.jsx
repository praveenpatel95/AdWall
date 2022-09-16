import React, {useState} from 'react';
import Helmet from 'react-helmet'
import { Link as RouterLink } from 'react-router-dom';

import {
    Container,
    Typography,
    Card,
    Table,
    TableCell,
    TableHead,
    TableRow,
    TableBody,
    Link,
    Box,
    Chip,
    IconButton,
    Menu,
    MenuItem,
    TablePagination

} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PublishIcon from '@mui/icons-material/Publish';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Pagination from '../../../../components/Pagination';

function List() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const Action = ({myValue}) => {
        return (
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        width: '12ch',
                    },
                }}
            >
                <MenuItem key={myValue} to="uplift" component={RouterLink}>
                    <Typography sx={{width: '80%'}}>Uplift</Typography>
                    <Typography variant="caption" pl={2}><ArrowUpwardIcon/></Typography>
                </MenuItem>
                <MenuItem key="Uplift">
                    <Typography sx={{width: '80%'}}>Publish</Typography>
                    <Typography variant="caption" pl={2}><PublishIcon/></Typography>
                </MenuItem>
                <MenuItem key="Modify">
                    <Typography sx={{width: '80%'}}>Modify</Typography>
                    <Typography variant="caption" pl={2}><BorderColorIcon/></Typography>
                </MenuItem>
            </Menu>
        )
    }

    return (
        <React.Fragment>
            <Helmet>
                <title>Adz</title>
            </Helmet>

            <Container maxWidth="lg">
                <Typography variant="h3">Adz</Typography>
                <Card sx={{mt: 3}}>
                    <Table>
                        <TableHead sx={{background: '#F3F4F6'}}>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Price </TableCell>
                                <TableCell>Status </TableCell>
                                <TableCell>Last updated</TableCell>
                                <TableCell></TableCell>
                                <TableCell/>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Box
                                        sx={{
                                            alignItems: 'center',
                                            display: 'flex'
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                alignItems: 'center',
                                                backgroundColor: 'background.default',
                                                backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/products/product_1.png'})`,
                                                backgroundPosition: 'center',
                                                backgroundSize: 'cover',
                                                borderRadius: 1,
                                                display: 'flex',
                                                height: 50,
                                                justifyContent: 'center',
                                                overflow: 'hidden',
                                                width: 50
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                cursor: 'pointer',
                                                ml: 2
                                            }}
                                        >
                                            <Typography variant="subtitle2">
                                                Banner for you
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                variant="body2"
                                            >
                                                Poland
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>$4.99</TableCell>
                                <TableCell>
                                    <Chip label="Published" color="success"/>
                                </TableCell>
                                <TableCell>
                                    12-03-2022 at 10:59
                                </TableCell>
                                <TableCell>
                                    <IconButton
                                        aria-label="more"
                                        id="long-button"
                                        aria-controls={open ? 'long-menu' : undefined}
                                        aria-expanded={open ? 'true' : undefined}
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    >
                                        <MoreVertIcon/>
                                    </IconButton>
                                    <Action myValue={2}/>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Box
                                        sx={{
                                            alignItems: 'center',
                                            display: 'flex'
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                alignItems: 'center',
                                                backgroundColor: 'background.default',
                                                backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/products/product_2.png'})`,
                                                backgroundPosition: 'center',
                                                backgroundSize: 'cover',
                                                borderRadius: 1,
                                                display: 'flex',
                                                height: 50,
                                                justifyContent: 'center',
                                                overflow: 'hidden',
                                                width: 50
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                cursor: 'pointer',
                                                ml: 2
                                            }}
                                        >
                                            <Typography variant="subtitle2">
                                                Searching for business cards destribution
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                variant="body2"
                                            >
                                                Norway
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>$4.99</TableCell>
                                <TableCell>
                                    <Chip label="Hold" color="primary"/>
                                </TableCell>
                                <TableCell>
                                    12-03-2022 at 10:59
                                </TableCell>
                                <TableCell>
                                    <IconButton
                                        aria-label="more"
                                        id="long-button"
                                        aria-controls={open ? 'long-menu' : undefined}
                                        aria-expanded={open ? 'true' : undefined}
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    >
                                        <MoreVertIcon/>
                                    </IconButton>
                                    <Action myValue={1}/>
                                </TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                    <Pagination />

                </Card>
            </Container>
        </React.Fragment>

    )
}

export default List;