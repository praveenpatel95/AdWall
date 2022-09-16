import React, {useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ChangeEmailModal from './ChangeEmailModal'
import ChangeWebsiteLinkModal from './ChangeWebsiteLinkModal'
import FlagIcon from '@mui/icons-material/Flag';

function BasicDetail() {

    const [changeEmailModal, setChangeEmailModal] = useState(false)
    const [changeWebsiteModal, setChangeWebsiteModal] = useState(false)

    return (
        <Card>
            <CardContent>
                <Typography component="h4" variant="h4">Basic details</Typography>
                <List>
                    <ListItem disablePadding>
                        <ListItemAvatar>
                            <Avatar>
                                <img src={process.env.PUBLIC_URL + '/assets/images/ad-demo.jpg'}/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={(<Button
                            variant="text"
                            component="label"
                        >
                            Change
                            <input
                                type="file"
                                hidden
                            />
                        </Button>)}/>
                    </ListItem>
                </List>
                <br/>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography>Name</Typography>
                        <Typography variant="b">Praveen</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>Surname</Typography>
                        <Typography variant="b">Rassel</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Email</Typography>
                        <Typography variant="b">pes@Rassel.com
                            <Button
                                variant="text"
                                component="label"
                                onClick={() => setChangeEmailModal(true)}
                                sx={{pl: 3}}>Change</Button>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Country</Typography>
                        <Typography variant="b">Poland
                            <img src={process.env.PUBLIC_URL + '/assets/images/ad-demo.jpg'}
                                 height="10" style={{paddingLeft: '10px'}}/>
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>Company</Typography>
                        <Typography variant="b">PesLivesMatter LLC.</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>Website</Typography>
                        <Typography variant="b">peslivesmatter.all
                            <Button
                                variant="text"
                                component="label"
                                onClick={() => setChangeWebsiteModal(true)}
                                sx={{pl: 2}}>Edit</Button>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Company Address</Typography>
                        <Typography variant="b">ul.Psa-Dobrego 58,Poznan, 31-874</Typography>
                    </Grid>

                </Grid>
            </CardContent>
            <ChangeEmailModal
                setChangeEmailModal={setChangeEmailModal}
                changeEmailModal={changeEmailModal}
            />
            <ChangeWebsiteLinkModal
                setChangeWebsiteModal={setChangeWebsiteModal}
                changeWebsiteModal={changeWebsiteModal}
            />
        </Card>
    )
}

export default BasicDetail;