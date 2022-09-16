import React from 'react';
import {
    Divider,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Typography,
    Badge
}  from '@mui/material'

function UserList({user, setOpenedUser, openedUser}){

    const handleOpenUser = (user) => {
        setOpenedUser(user)
    }
    console.log("openedUser", openedUser)
    return (

            <React.Fragment>
                <ListItem alignItems="flex-start"
                          style={{
                              cursor:'pointer',
                              ...(openedUser.id ===  user.id && {
                                  background:'rgba(55, 65, 81, 0.08)',
                              })
                          }}
                          onClick={() => handleOpenUser(user)}
                >
                    <ListItemAvatar>
                        <Avatar alt={user?.name} src={user?.image} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={user?.name}
                        secondary={user?.title}
                    />
                    <Typography variant="caption" color="grey.main">
                        {user?.time}
                        <br />
                        { user?.count !==0 &&
                        <Badge badgeContent={user?.count} color="success"
                               sx={{marginRight:2, textAlign:'center'}}/>
                        }
                    </Typography>
                </ListItem>
                <Divider/>
            </React.Fragment>

    )
}
export default UserList;