import {useState} from 'react';
import {Card,
    CardContent,
    Grid,
    Typography,
    Button,
    TextField,
    Box
} from '@mui/material';

function ChangePassword(){
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };

    return (
        <Card>
            <CardContent>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        md={4}
                        xs={12}
                    >
                        <Typography variant="h4">
                            Change password
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        md={8}
                        sm={12}
                        xs={12}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <TextField
                                disabled={!isEditing}
                                label="Password"
                                type="password"
                                defaultValue="Thebestpasswordever123#"
                                size="small"
                                sx={{
                                    flexGrow: 1,
                                    mr: 3,
                                    ...(!isEditing && {
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderStyle: 'dotted'
                                        }
                                    })
                                }}
                            />
                            <Button onClick={handleEdit}>
                                {isEditing ? 'Save' : 'Edit'}
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
export default ChangePassword;